import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? "#00061FF" : "#666876"}
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${focused ? "text-primary-300 font-Rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Anasayfa",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Anasayfa" />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Keşfet",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Keşfet" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profilim",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profilim" />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
