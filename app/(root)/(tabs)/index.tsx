import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Günaydın
              </Text>
              <Text className="text-base font-Rubik-medium text-black-300">
                Mikail
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-Rubik-bold text-black-300">
              Öne Çıkanlar
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-Rubik-bold text-primary-300">
                Hepsini görün
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-5 mt-5">
            <FeaturedCard />
            <FeaturedCard />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-Rubik-bold text-black-300">
            Bizim Önerilerimiz
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-Rubik-bold text-primary-300">
              Hepsini görün
            </Text>
          </TouchableOpacity>
        </View>

        <Filters />

        <View className="flex flex-row gap-5 mt-5">
          <Card />
          <Card />
        </View>
      </View>
    </SafeAreaView>
  );
}
