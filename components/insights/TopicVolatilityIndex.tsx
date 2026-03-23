import { View, Text, FlatList } from "react-native"

const topics = [
  {topic:"Technology", score:0.82},
  {topic:"Politics", score:0.74},
  {topic:"Culture", score:0.63}
]

export default function TopicVolatilityIndex(){

  return(

    <View className="mb-8">

      <Text className="text-white text-xl font-bold mb-4">
        📈 Topic Volatility
      </Text>

      <FlatList
        data={topics}
        keyExtractor={(item)=>item.topic}
        scrollEnabled={false}
        renderItem={({item})=>(
          <View className="bg-zinc-900 p-4 rounded-xl mb-2 flex-row justify-between">
            <Text className="text-white">
              {item.topic}
            </Text>
            <Text className="text-yellow-400">
              {item.score}
            </Text>
          </View>
        )}
      />

    </View>

  )

}