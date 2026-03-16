import { collection, query, where, onSnapshot } from "firebase/firestore"
import { db } from "./firebase"
import { useEffect, useState } from "react"

export function useActiveDebate() {

  const [debate, setDebate] = useState<any>(null)

  useEffect(() => {

    const q = query(
      collection(db, "debates"),
      where("active", "==", true)
    )

    const unsubscribe = onSnapshot(q, snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setDebate(data[0])
    })

    return unsubscribe

  }, [])

  return debate
}