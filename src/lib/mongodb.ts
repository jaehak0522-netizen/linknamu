import { MongoClient } from "mongodb";

// 개발 중 핫 리로드, 서버리스 인스턴스 재사용 시 연결을 하나만 유지하도록 전역에 캐시
const globalForMongo = globalThis as unknown as { mongoClient?: Promise<MongoClient> };

// MONGODB_URI가 없으면 null을 반환 → 클릭 수 집계 없이도 페이지는 동작
export function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  globalForMongo.mongoClient ??= new MongoClient(uri, { serverSelectionTimeoutMS: 3000 }).connect();
  return globalForMongo.mongoClient;
}
