import { getMongoClient } from "./mongodb";

type ClickDoc = { _id: string; count: number; lastClickedAt: Date };

async function clicksCollection() {
  const client = await getMongoClient();
  if (!client) return null;
  return client.db(process.env.MONGODB_DB || "linknamu").collection<ClickDoc>("clicks");
}

// 집계 실패가 링크 이동을 막지 않도록 에러는 기록만 하고 삼킴
export async function recordClick(linkId: string) {
  try {
    const col = await clicksCollection();
    await col?.updateOne(
      { _id: linkId },
      { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
      { upsert: true },
    );
  } catch (err) {
    console.error("클릭 수 기록 실패:", err);
  }
}
