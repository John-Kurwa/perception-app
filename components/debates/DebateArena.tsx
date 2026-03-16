import { View, Text, TouchableOpacity } from "react-native"

export default function DebateArena() {

  return (

    <View className="mb-8">

      <Text className="text-white text-xl font-bold mb-4">
        🎤 Debate Arena
      </Text>

      <View className="bg-zinc-900 rounded-3xl p-5">

        <Text className="text-white text-lg font-semibold mb-2">
          Should AI replace teachers?
        </Text>

        <Text className="text-zinc-400 mb-4">
          Stage: Rebuttal • ⏱ 4h remaining
        </Text>

        <View className="flex-row justify-between">

          {/* SIDE A */}
          <View className="w-[48%] bg-zinc-800 rounded-2xl p-3">

            <Text className="text-green-400 font-bold mb-1">
              Side A
            </Text>

            <Text className="text-white text-sm">
              AI enables personalized learning paths.
            </Text>

            <Text className="text-zinc-400 mt-2">
              Strength: 72
            </Text>

            <TouchableOpacity className="bg-green-500 rounded-xl py-2 mt-3">
              <Text className="text-center text-black font-semibold">
                Vote A
              </Text>
            </TouchableOpacity>

          </View>

          {/* SIDE B */}
          <View className="w-[48%] bg-zinc-800 rounded-2xl p-3">

            <Text className="text-blue-400 font-bold mb-1">
              Side B
            </Text>

            <Text className="text-white text-sm">
              Teachers provide emotional intelligence.
            </Text>

            <Text className="text-zinc-400 mt-2">
              Strength: 68
            </Text>

            <TouchableOpacity className="bg-blue-500 rounded-xl py-2 mt-3">
              <Text className="text-center text-black font-semibold">
                Vote B
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>

  )
}