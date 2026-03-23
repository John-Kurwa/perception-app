import { View, Text } from "react-native"

export default function WorldHeatMap(){

  return(

    <View className="mb-8">

      <Text className="text-white text-xl font-bold mb-4">
        🌍 World Heat Map
      </Text>

      <View className="bg-zinc-900 rounded-2xl p-6 items-center">

        <Text className="text-zinc-400">
          Global debate activity visualization
        </Text>

      </View>

    </View>

  )

}