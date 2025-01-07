import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, FeaturedCard } from "@/components/Cards";
import NoResults from "@/components/NoResults";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import { router, useLocalSearchParams } from "expo-router";
import { useAppwrite } from "@/lib/useAppwrite";
import { getLatestProperties, getProperties } from "@/lib/appwrite";

const Explore = () => {
  const params = useLocalSearchParams<{ query: string; filter?: string }>();

  const {
    data: properties,
    loading,
    reFetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 20,
    },
    skip: true,
  });

  const handleCardPress = (id: string) => {
    router.push(`/properties/${id}`);
  };

  useEffect(() => {
    reFetch({
      filter: params.filter!,
      query: params.query!,
      limit: 20,
    });
  }, [params.filter, params.query]);
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
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
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-base mr-2 text-center font-Rubik-medium text-black-300">
                Size ideal evi bulun
              </Text>

              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />

            <View className="mt-5">
              <Filters />

              <Text className="text-xl font-Rubik-bold text-black-300 mt-5">
                {properties?.length} ilan bulundu
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};
export default Explore;
