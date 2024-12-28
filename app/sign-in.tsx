import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            ReState Hoşgeldiniz
          </Text>

          <Text className="text-3xl font-Rubik-bold text-black-300 text-center mt-2">
            Hadi Size Yakın {"\n"}
            <Text className="text-primary-300">Uygun Evi Seçelim</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Google ile Giriş Yap
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="size-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-Rubik-medium text-black-300 ml-2">
                Google ile devam et
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
