import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"

export async function voteArgument(
  debateId: string,
  side: "A" | "B",
  userId: string
) {

  await addDoc(
    collection(db, "debates", debateId, "votes"),
    {
      side,
      userId,
      createdAt: new Date()
    }
  )
}