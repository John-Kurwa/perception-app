import { View, Text } from "react-native"

export default function StatsSection(){

  const stats = [
    { label: "Debates Joined", value: 24 },
    { label: "Arguments Made", value: 58 },
    { label: "Avg Strength", value: "72%" }
  ]

  return(

    <View className="mb-8">

      <Text className="text-white text-lg font-semibold mb-4">
        Stats
      </Text>

      <View className="flex-row justify-between">

        {stats.map((s)=>(
          <View key={s.label} className="items-center">

            <Text className="text-white font-bold text-lg">
              {s.value}
            </Text>

            <Text className="text-zinc-400 text-xs mt-1">
              {s.label}
            </Text>

          </View>
        ))}

      </View>

    </View>

  )
}