# backend/app/database/mongodb.py
from pymongo import MongoClient
import os

def get_mongo_client():
    # MongoDB connection URI from environment variables
    uri = os.getenv("MONGO_URI", "mongodb://localhost:27017")
    return MongoClient(uri)
