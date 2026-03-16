import { useEffect, useState } from "react"
import { Text } from "react-native"

export default function DebateTimer({ endsAt }: { endsAt: string }) {

  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {

    const timer = setInterval(() => {

      const diff =
        new Date(endsAt).getTime() - Date.now()

      const hours = Math.floor(diff / 3600000)
      const minutes = Math.floor(diff / 60000) % 60

      setTimeLeft(`${hours}h ${minutes}m remaining`)

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <Text className="text-zinc-400">
      ⏳ {timeLeft}
    </Text>
  )
}