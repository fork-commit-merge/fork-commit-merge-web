import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDb = null;

export async function connectToDB() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("devgallery_db");

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

