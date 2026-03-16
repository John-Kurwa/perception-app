import { View, Text, FlatList } from "react-native"

const users = [
  {id:"1", name:"LogicMaster", points:820},
  {id:"2", name:"ThinkGuru", points:710},
  {id:"3", name:"DebateMind", points:650}
]

export default function Leaderboard(){

  return(

    <View className="mb-12">

      <Text className="text-white text-xl font-bold mb-4">
        🏆 Leaderboard
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item)=>item.id}
        scrollEnabled={false}
        renderItem={({item,index})=>(

          <View className="flex-row justify-between bg-zinc-900 p-4 rounded-xl mb-2">

            <Text className="text-white">
              {index+1}. {item.name}
            </Text>

            <Text className="text-green-400">
              {item.points} pts
            </Text>

          </View>

        )}
      />

    </View>

  )
}