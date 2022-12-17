from pymongo import MongoClient

from app.config import mongodb_url

client = MongoClient(mongodb_url)
