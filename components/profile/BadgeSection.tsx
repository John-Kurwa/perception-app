import { View, Text } from "react-native"

const badges = [
  { id: "1", name: "Top Thinker" },
  { id: "2", name: "Debate Pro" },
  { id: "3", name: "Insight Analyst" }
]

export default function BadgesSection(){

  return(

    <View className="mb-8">

      <Text className="text-white text-lg font-semibold mb-4">
        Badges
      </Text>

      <View className="flex-row">

        {badges.map((badge)=>(
          <View
            key={badge.id}
            className="bg-zinc-900 px-4 py-2 rounded-full mr-2 border border-zinc-700"
          >
            <Text className="text-zinc-300 text-sm">
              {badge.name}
            </Text>
          </View>
        ))}

      </View>

    </View>

  )
}