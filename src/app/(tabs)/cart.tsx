import {
    View,
    Text,
    ImageSourcePropType,
    Pressable,
    useWindowDimensions
} from "react-native";
import React from "react";
import {ScrollView} from "react-native-gesture-handler";
import {router} from "expo-router";
import { EvilIcons, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {colors} from "../../utils/color";
import { Image } from "expo-image";


const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const staticCartItems = [
    {
        id: 1,
        product: {
            name: "Coffee",
            image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            price: 30,
            quantity_available: 10
        },
        amount: 2
    }, {
        id: 2,
        product: {
            name: "Tea",
            image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            price: 30,
            quantity_available: 15
        },
        amount: 3
    },
];

const CartItemComponent: React.FC = (item:any) => {
  const [quantity, setQuantity] = React.useState(1);

    return (
        <View className="flex-row border justify-between border-slate-100 flex p-2 mt-3 rounded-md items-center">
            <View className="flex flex-row gap-x-4">
            <View>
              <Image className='bg-[#0553] w-20 h-20 mx-auto' source={item.product.image}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}/>
            </View>
            <View>
              <Text className="text-medium font-semibold text-lg">{item.product.name}</Text>
              <Text className="text-sm text-primary">$ {item.product.price}</Text>
              <EvilIcons name="trash" size={20} color="black" />
            </View>
            </View>

            <View className="flex-col flex justify-between items-center">
              <Pressable
                onPress={() => {
                  if (quantity === 1) return;
                setQuantity(quantity - 1);
              }}
              className="flex items-center px-2 py-1 justify-center">
                <View className="border border-[gray] p-1 rounded-lg">
                  <FontAwesome5 name="minus" size={15} color="gray" />
                </View>
              </Pressable>
              <Text className="text-sm font-bold text-primary">{quantity}</Text>
              <Pressable
                onPress={() => {
                setQuantity(quantity + 1);
              }}
              className="flex items-center px-2 py-1 justify-center"
              >
                <View className="border border-[gray] p-1 rounded-lg">
                  <FontAwesome5 name="plus" size={15} color="gray" />
                </View>
              </Pressable>
            </View>
        </View>
    );
};

const CartScreen: React.FC = () => {
    const {height} = useWindowDimensions();
    const total = staticCartItems.reduce((acc, item) => acc + item.product.price , 0);

    return (
        <>
            <LinearGradient style={{height: height / 3,padding: 20,flexDirection: "column",justifyContent: "flex-end",flex: 1}} colors={[`#fff`, colors.accent]}>
                <View className="pb-20 px-4 justify-between flex-col flex-1">
                    {staticCartItems.length === 0 && (
                        <Text className=" mt-4 text-center text-sm">
                            No cart items
                        </Text>
                    )}
                    {staticCartItems.length > 0 && (
                        <ScrollView key={"order.id"} className="flex-col  rounded-lg bg-whitep-4">{
                            staticCartItems.map((item) => (
                                <CartItemComponent key={item.id} {...item}/>
                            ))} 
                        </ScrollView>
                    )}
                    <View className=" flex-col w-full">
                        <View className="flex-row justify-between">
                            <Text className="font-regular text-sm">Total (2 items)</Text>
                            <Text className="text-black font-semibold text-medium">
                                {total}
                                $
                            </Text>
                        </View>
                        <Pressable className={`p-4 mt-3 ${staticCartItems.length === 0 ? "bg-slate-500" : "bg-primary"} rounded-full`} onPress={() => {if (staticCartItems.length === 0) return;router.push("/shipping"); }}>
                            <Text className="text-white self-center font-semibold text-xl">
                                Checkout $ {total}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </>
    );
};

export default CartScreen;
