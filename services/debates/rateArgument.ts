import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"

export async function rateArgument(
  debateId: string,
  argumentId: string,
  score: any,
  userId: string
) {

  await addDoc(
    collection(db, "debates", debateId, "scores"),
    {
      argumentId,
      userId,
      ...score,
      createdAt: new Date()
    }
  )
}