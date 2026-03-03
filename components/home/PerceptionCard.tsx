import { View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import { timeAgo } from "@/utils/timeAgo";
import { Perception } from "@/services/mockFeed";
import { AntDesign, Feather } from "@expo/vector-icons";

interface Props {
  item: Perception;
}

export default function PerceptionCard({ item }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [agreed, setAgreed] = useState<boolean | null>(null);

  return (
    <View className="bg-surface rounded-2xl p-4 mb-4 shadow-md">
      
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Image
          source={{ uri: item.avatar }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-white font-semibold">
            {item.author}
          </Text>
          <Text className="text-gray-400 text-xs">
            {item.category} • {timeAgo(item.createdAt)}
          </Text>
        </View>
        <Feather author="more-horizontal" size={20} color="gray" />
      </View>

      {/* Hook / Title */}
      <Text className="text-white text-lg font-bold mb-2">
        {item.title}
      </Text>

      {/* Body */}
      <Pressable onPress={() => setExpanded(!expanded)}>
        <Text
          className="text-gray-300 leading-5"
          numberOfLines={expanded ? undefined : 3}
        >
          {item.content}
        </Text>
        {!expanded && (
          <Text className="text-primary mt-1 text-sm">
            Read more
          </Text>
        )}
      </Pressable>

      {/* Optional Image */}
      {item.image && (
        <Image
          source={{ uri: item.image }}
          className="w-full h-48 rounded-xl mt-3"
          resizeMode="cover"
        />
      )}

      {/* Vote Percentage Bar */}
      <View className="mt-4">
        {(() => {
          const total = item.agrees + item.disagrees;
          const agreePercent =
            total === 0 ? 50 : (item.agrees / total) * 100;

          return (
            <View className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <View
                style={{ width: `${agreePercent}%` }}
                className="h-full bg-primary"
              />
            </View>
          );
        })()}

        <View className="flex-row justify-between mt-1">
          <Text className="text-primary text-xs">
            {item.agrees} Agree
          </Text>
          <Text className="text-accent text-xs">
            {item.disagrees} Disagree
          </Text>
        </View>
      </View>

      {/* Engagement Bar */}
      <View className="flex-row justify-between items-center mt-4 border-t border-gray-700 pt-3">

        {/* Agree */}
        <Pressable
          onPress={() => setAgreed(true)}
          className="flex-row items-center"
        >
          <AntDesign
            author="like1"
            size={18}
            color={agreed === true ? "#5B5FFF" : "gray"}
          />
          <Text className="text-gray-400 ml-1 text-sm">
            Agree
          </Text>
        </Pressable>

        {/* Disagree */}
        <Pressable
          onPress={() => setAgreed(false)}
          className="flex-row items-center"
        >
          <AntDesign
            author="dislike1"
            size={18}
            color={agreed === false ? "#FF6A3D" : "gray"}
          />
          <Text className="text-gray-400 ml-1 text-sm">
            Disagree
          </Text>
        </Pressable>

        {/* Comment */}
        <Pressable className="flex-row items-center">
          <Feather author="message-circle" size={18} color="gray" />
          <Text className="text-gray-400 ml-1 text-sm">
            Comment
          </Text>
        </Pressable>

        {/* Share */}
        <Pressable className="flex-row items-center">
          <Feather author="share-2" size={18} color="gray" />
          <Text className="text-gray-400 ml-1 text-sm">
            Share
          </Text>
        </Pressable>
      </View>
    </View>
  );
}