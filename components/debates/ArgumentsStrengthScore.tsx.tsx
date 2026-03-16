import { View, Text, TouchableOpacity } from "react-native"

const scores = [1,2,3,4,5]

export default function ArgumentStrengthScore() {

  return (

    <View className="mb-8">

      <Text className="text-white text-xl font-bold mb-4">
        📊 Rate Argument
      </Text>

      {["Clarity","Logic","Evidence"].map((label)=>(
        
        <View key={label} className="mb-4">

          <Text className="text-zinc-400 mb-2">
            {label}
          </Text>

          <View className="flex-row">

            {scores.map((s)=>(
              
              <TouchableOpacity
                key={s}
                className="bg-zinc-800 rounded-xl w-10 h-10 items-center justify-center mr-2"
              >
                <Text className="text-white">
                  {s}
                </Text>
              </TouchableOpacity>

            ))}

          </View>

        </View>

      ))}

    </View>

  )
}