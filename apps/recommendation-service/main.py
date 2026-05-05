from fastapi import FastAPI
from model import train_model, recommend

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Recommendation Service is running"}


# ✅ TRAIN endpoint
@app.post("/train")
def train():
    return train_model()   # ❗ بدون أي باراميتر


# ✅ RECOMMEND endpoint
@app.get("/recommend/{product_id}")
def get_recommendations(product_id: str, top_n: int = 5):
    return recommend(product_id, top_n)