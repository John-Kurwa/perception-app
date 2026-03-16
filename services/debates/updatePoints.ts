import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from "./firebase"

export async function addPoints(
  userId: string,
  points: number
) {

  const ref = doc(db, "leaderboard", userId)

  await updateDoc(ref, {
    points: increment(points)
  })
}