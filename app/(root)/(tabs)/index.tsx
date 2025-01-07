import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 128,
        }}
        columnWrapperStyle={{
          display: "flex",
          gap: 20,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Günaydın
                  </Text>
                  <Text className="text-base font-Rubik-medium text-black-300">
                    {user?.name}
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

              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  display: "flex",
                  gap: 20,
                  marginTop: 20,
                }}
              />
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
          </View>
        }
      />
    </SafeAreaView>
  );
}
