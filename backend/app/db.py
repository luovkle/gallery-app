from app.config import mongodb_url
from pymongo import MongoClient

client = MongoClient(mongodb_url)
