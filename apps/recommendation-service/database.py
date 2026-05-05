import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")
PRODUCTS_COLLECTION = os.getenv("PRODUCTS_COLLECTION")

client = MongoClient(MONGO_URL)
db = client[DB_NAME]

products_collection = db[PRODUCTS_COLLECTION]