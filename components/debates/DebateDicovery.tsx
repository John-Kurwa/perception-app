import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"

const debates = [
  {
    id: "1",
    topic: "Should AI replace traditional education?",
    category: "Technology",
    participants: 124
  },
  {
    id: "2",
    topic: "Is remote work better than office work?",
    category: "Work",
    participants: 83
  }
]

export default function DebateDiscovery() {

  const router = useRouter()

  return (
    <View className="mb-8">

      <Text className="text-white text-xl font-bold mb-4">
        🔎 Discover Debates
      </Text>

      <FlatList
        data={debates}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (

          <TouchableOpacity
            onPress={() => router.push(`/debate/${item.id}`)}
            className="bg-zinc-900 rounded-2xl p-4 mb-3"
          >

            <Text className="text-white font-semibold text-base">
              {item.topic}
            </Text>

            <Text className="text-zinc-400 text-sm mt-1">
              {item.category}
            </Text>

            <Text className="text-zinc-500 text-xs mt-1">
              {item.participants} participants
            </Text>

          </TouchableOpacity>

        )}
      />

    </View>
  )
}