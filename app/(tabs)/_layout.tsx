import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#888",
        // tabBarItemStyle: {  
        //   height: 50,       
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   paddingVertical: 8,
        // },
        tabBarStyle: {
          backgroundColor: 'COLORS.Zinc900',
          borderColor: 'COLORS.Zinc700',
          // height: 56,
          position: 'absolute', 
          overflow: 'hidden',
          // paddingVertical: 8,
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          switch (route.name) {
            case "home":
              iconName = focused ? "home" : "home-outline";
              break;

            case "explore":
              iconName = focused ? "search" : "search-outline";
              break;

            case "debates":
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
              break;

            case "insights":
              iconName = focused ? "analytics" : "analytics-outline";
              break;

            case "profile":
              iconName = focused ? "person" : "person-outline";
              break;
          }
      
          return (
            <Ionicons name={iconName} size={22} color={color} />
      );
    },
  })}
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