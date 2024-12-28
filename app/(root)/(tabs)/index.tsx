import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className=" font-bold text-2xl">Merhaba</Text>
      <Link href="/sign-in">Kayıt Ol</Link>
      <Link href="/profile">Profil</Link>
      <Link href="/explore">Keşfet</Link>
      <Link href="/properties/1">Özellikler</Link>
    </View>
  );
}
