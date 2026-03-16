import { collection, onSnapshot } from "firebase/firestore"
import { db } from "./firebase"
import { useEffect, useState } from "react"

export function useArguments(debateId: string) {

  const [argumentsData, setArgumentsData] = useState([])

  useEffect(() => {

    const ref = collection(db, "debates", debateId, "arguments")

    const unsub = onSnapshot(ref, snap => {

      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setArgumentsData(data)
    })

    return unsub

  }, [debateId])

  return argumentsData
}