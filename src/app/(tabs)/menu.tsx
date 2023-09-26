import { router } from "expo-router";
import React, { useState, useCallback, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  View,
  RefreshControl,
  Text,
  TextInput
} from "react-native";
import GridView from "../../constants/GridViewer";
import {FontAwesome5, Ionicons } from "@expo/vector-icons";
import useMediaQuery from "../../hooks/useMediaQuery";
import { colors } from "../../utils/color";
import { Image } from 'expo-image'

const staticMenuItems = [
  {
    name: "Coffee",
    price: "5",
    quantity_available: 10,
    image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Tea",
    price: "4",
    quantity_available: 15,
    image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Milk",
    price: "5",
    quantity_available: 10,
    image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "African Coffe",
    price: "4",
    quantity_available: 15,
    image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const MenuIndex = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { xs, md, xxs } = useMediaQuery();
  const [activefav, setActivefav] = useState(0);
  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <View className=" w-full px-5 pb-7 pt-2 flex-col">
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        className="flex-col mt-3 h-full"
      >
        <View className="bg-white w-full p-4 space-x-4 rounded-md flex flex-row items-center shadow-2xl drop-shadow-2xl">
          <FontAwesome5 name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search"
            className="flex-1"
            placeholderTextColor="gray"
          />
        </View>
        <Text className="text-black font-bold mt-4">Menu</Text>
        <View className="mt-5 bg-transparent py-3 rounded-md">
          {staticMenuItems.length === 0 && !loading && (
            <Text className="text-center text-gray-500 font-bold">
              No menu items
            </Text>
          )}
          {staticMenuItems.length > 0 && (
            <GridView
              data={staticMenuItems}
              renderItem={(item) => {
                return (
                  <Pressable
                    className="rounded-md p-3  flex-col border bg-white border-gray-100 px-1"
                    style={{ flex: 1, flexDirection: "column" }}
                    onPress={() => router.push(`/product/${item?.menuItem_id}`)}
                  >
                    <View className="flex-1 justify-end flex-row flex pr-4">
                      <Pressable onPress={()=>setActivefav(item.id)}>
                        <Ionicons name="heart-outline" size={24} color={!activefav === item.id ? colors.primary : "black"} />
                      </Pressable>
                    </View>
                    <Image className='bg-[#0553] w-20 h-20 mx-auto' source={item.image}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}/>
                    <View className="flex-row justify-between items-center py-2 px-2 w-full">
                      <Text className="text-black text-center font-bold">
                        {item.name}
                      </Text>
                      <Text className="text-primary text-center font-bold">
                        $ {item.price}
                      </Text>
                    </View>
                    <View className="flex-row justify-between items-center my-2 px-2">
                      <Pressable className="bg-primary w-full py-3 flex flex-row rounded-full justify-center items-center">
                        <FontAwesome5 name="shopping-bag" size={20} color="white" />
                        <Text className="text-white font-semibold pl-4">Add To Cart</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                );
              }}
              numColumns={xxs ? 1 : xs ? 2 : md ? 3 : 4}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuIndex;
