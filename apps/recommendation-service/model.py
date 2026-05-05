import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from joblib import dump, load
import os
import requests

VECTORIZER_PATH = "vectorizer.joblib"
COSINE_MATRIX_PATH = "cosine_matrix.joblib"
PRODUCTS_PATH = "products.joblib"


# =========================
# TRAIN MODEL
# =========================
def train_model():
    try:
        response = requests.get("http://localhost:8000/products")

        # تأكد أن الـ API شغال
        if response.status_code != 200:
            return {"error": "Failed to fetch products from product-service"}

        products = response.json()

        df = pd.DataFrame(products)

        if df.empty:
            return {"error": "No products found from product-service"}

        # إزالة التكرار
        if "id" in df.columns:
            df = df.drop_duplicates(subset=["id"])

        # تأمين الـ ID
        df["_id"] = df["id"].astype(str)

        # بناء النص للتعلم
        df["text"] = (
            df["name"].fillna("").astype(str) + " " +
            df["shortDescription"].fillna("").astype(str) + " " +
            df["description"].fillna("").astype(str) + " " +
            df["categorySlug"].fillna("").astype(str)
        )

        # TF-IDF
        vectorizer = TfidfVectorizer(stop_words="english")
        tfidf_matrix = vectorizer.fit_transform(df["text"])

        # Cosine similarity
        cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

        # حفظ الملفات
        dump(vectorizer, VECTORIZER_PATH)
        dump(cosine_sim, COSINE_MATRIX_PATH)
        dump(df, PRODUCTS_PATH)

        return {
            "message": "Model trained successfully",
            "products_count": len(df)
        }

    except Exception as e:
        return {"error": str(e)}


# =========================
# RECOMMEND PRODUCTS
# =========================
def recommend(product_id: str, top_n: int = 5):
    try:
        product_id = str(product_id)

        if not os.path.exists(COSINE_MATRIX_PATH):
            return {"error": "Model not trained yet. Run /train first."}

        cosine_sim = load(COSINE_MATRIX_PATH)
        df = load(PRODUCTS_PATH)

        df["_id"] = df["_id"].astype(str)

        # التحقق من وجود المنتج
        if product_id not in df["_id"].values:
            return {"error": f"Product {product_id} not found"}

        idx_list = df.index[df["_id"] == product_id].tolist()

        if len(idx_list) == 0:
            return {"error": "Product index not found"}

        idx = idx_list[0]

        # حساب التشابه
        sim_scores = list(enumerate(cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

        # تجاهل نفس المنتج
        sim_scores = sim_scores[1:top_n + 1]

        product_indices = [i[0] for i in sim_scores]

        results = df.iloc[product_indices][["_id", "name", "categorySlug"]]

        return results.to_dict(orient="records")

    except Exception as e:
        return {"error": str(e)}