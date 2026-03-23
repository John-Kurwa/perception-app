import { View, Text } from "react-native"

export default function MostPolarizingTopic(){

  return(

    <View className="mb-8">

      <Text className="text-white text-xl font-bold mb-4">
        🔥 Most Polarizing Topic
      </Text>

      <View className="bg-zinc-900 rounded-2xl p-5">

        <Text className="text-white font-semibold">
          Should AI replace teachers?
        </Text>

        <Text className="text-zinc-400 mt-2">
          49% agree • 51% disagree
        </Text>

      </View>

    </View>

  )

}