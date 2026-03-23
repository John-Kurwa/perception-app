import { View, Text } from "react-native"

export default function UserHeader(){

  const user = {
    name: "fekflegewpd",
    country: "🇰🇪",
    score: 1280
  }

  return(

    <View className="items-center mb-8">

      {/* Username + Flag */}
      <View className="flex-row items-center mb-2">
        <Text className="text-white text-lg font-semibold">
          {user.name}
        </Text>
        <Text className="ml-2 text-base">
          {user.country}
        </Text>
      </View>

      {/* Perception Score */}
      <View className="items-center">

        <Text className="text-zinc-400 text-sm mb-1">
          Perception Score
        </Text>

        <Text className="text-5xl font-bold text-primary">
          {user.score}
        </Text>

        {/* Glow effect */}
        <View className="absolute w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

      </View>

    </View>

  )
}