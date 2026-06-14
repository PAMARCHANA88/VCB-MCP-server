from pymongo import MongoClient

MONGO_URI = "mongodb+srv://pamarchana88_db_user:nA2sIdoMUjewJTU6@cluster0.yhpgjep.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URI)

db = client["vcb_health"]

collection = db["vcb_reports"]

print("MongoDB Connected Successfully")