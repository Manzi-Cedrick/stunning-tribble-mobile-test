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
    name: "African donut milk",
    price: "5",
    quantity_available: 10,
    image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Efo Riro",
    price: "4",
    quantity_available: 15,
    image: "https://s3-alpha-sig.figma.com/img/b9c6/c267/1723fca06277aa180afddf41cfc06065?Expires=1696809600&Signature=FLFmH8ihy89-BkB6wTVhTGxh1KBEfqNO8~XoSBcLdn-NUrErmKV3rKMBjUWYmrlE7zEOfpmGIuQOT~-g2oU9fBl8Zo5mj-X-4FW0jHTRziTwaAhVPlpXSfKJLyMl9BR4hiKi7H9UxVZj~v0sHtkqZ-nR0uTgtfDrPoxZfN6uZcN0YVurmY~iS2DVPhW0bdVncHVxIeQ2sDU69TBykvu4IfZ6QxS8h1sL2sjNuOQqamfZhiST4DuTtBnB3yyKJW2uFSqZj1MUb6U2PfSnbq9v0hdztTrb2g7tJZ0wPJXDzxbjv74q4XZdnRrZqSJRcGkxv6bbXDWuHKzaihdG2doqGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Asari(Yams)",
    price: "5",
    quantity_available: 10,
    image: "https://s3-alpha-sig.figma.com/img/8127/df7c/f3e1712529caa0b55e1663646c798fd3?Expires=1696809600&Signature=eNfvWm5DY8UzdrqR64-ee59sdySO9S23Fd6w-mBCAzqG8QHws1E3QaWQdiScio7j3zpzVRmko0NzqK-bucs9CK0odfEXb15KTog8-9VlNA9yry~eNfSvnXZd3kHJeYuuPm7xiCi8rHTmXGi2Q0PUpPQC22DF2ueQcy9Wmjo5uTCLPLwMp12CQ1kkyQwI8J9vHEuxv~h9e~AOFH-ioy1g901jYC2K0HQhdScSicaxLailC1-CR5~Hu6aNd4u3m0XNd4tLko-O2zwH3hE6YClKRo8~vWLGpdP6FYT4LLY4L0OnToCCaNgv~FNyKYZUIw88-l9~lr4MdzED8gehzgnXvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Chicken Stew",
    price: "4",
    quantity_available: 15,
    image: "https://s3-alpha-sig.figma.com/img/3a7c/fb08/a1d7b520531bdedb26a13f45224a54da?Expires=1696809600&Signature=Rcy5xLIEVzZ97sg3ABq1~Krysl-yfpT1BqoPZErpAxKv1fjGTJVvVWJVvetGqt95aj-VS2Sqpho4x3oVhKbMdxu8m3CLmEl9NcnsUPwaST4fqsToF~qfV9J3yWlf8fGCq0KSDrcfTOqn0djFp7WjIX9L9H9cdAshVgCdsHH7vflIoU8QOzwUthbM3F4CbBsjmqSNSyBPlkk8jOfQqqfKjnFDrvoTjDohHwO5QX1eaOU4BBLlZoVhmuvf0Geuv0E4WK02Wi7VKBgFwver7K91T9bD73OJl2gEU8VrnbaUItAgtyJiOyGN0DHmgBoeosNr2-CtsIiy1-YcMHO~DGGvqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
                    <Image className='w-20 h-20 mx-auto' source={item.image}
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
