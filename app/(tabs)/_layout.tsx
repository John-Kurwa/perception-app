import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarItemStyle: {  
          height: 50,       
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 8,
        },
        tabBarStyle: {
          backgroundColor: 'COLORS.Zinc900',
          // borderRadius: 50,
          // marginHorizontal: 20,
          marginBottom: 40,
          // height: 56,
          position: 'absolute', 
          // overflow: 'hidden',
          borderColor: 'COLORS.Zinc700',
          paddingVertical: 8,
        },
      }}  
    >         
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{  
          title: "Explore",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="debates"
        options={{
          title: "Debates",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};