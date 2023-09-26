import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { colors } from "../../utils/color";
import { Image } from "expo-image";


const ProductScreen = () => {
  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const {id} = useLocalSearchParams()
  const [quantity, setQuantity] = React.useState(1);
  const product = {
    id: id,
    name: "African Donut Milk",
    description: "Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....Read more",
    price: 10, 
    quantity_available: 50, 
    menuItem_id: 1,
    image: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1696809600&Signature=WAddpVz9flCnxANHW1DwCrxM-z~8w6MIEpmAdZ0KSyKW56dQqK0ogn0OOVs395Oh2FsFVuAwZdcJoPBTPq6NzdmL10IaJczAp7Zn22W2I1t0uxm0rAze0FkjXCy9em9Wa-zdtsbafunuvTtD5ab7nP39kOik85V99ChUDS8S8j6Hbv8Xc99WBHgFrZANgNwfyIsXDPVEpyj2KtVnqRuNCGl4x6GG6JpGl5rjakfyQTNYhV54OlQtvlUv2grpepxYFmqJZVWla2~VNf-AnYCk~T73mYJLfnduTPhQZFe8r3UmI-16yHwh0HfU9fcrxMTKmiGsdijl0P-9iG0F5Dxnwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", // Replace with an image URL
  };
  const [isAdded, setIsAdded] = React.useState({
    cart: false,
    favorite: false,
  });
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionData = [
    {
      title: "Ingredients",
      description:
        "Nutritional information for this product goes here. You can provide details about calories, fats, proteins, etc.",
    },
    {
      title: "Nutritional Information",
      description:
        "Nutritional information for this product goes here. You can provide details about calories, fats, proteins, etc.",
    },
    {
      title: "How to Prepare",
      description:
        "Instructions on how to prepare this product go here. You can include steps for cooking or any special preparation instructions.",
    },
    {
      title: "Dietary Information",
      description:
        "Information about dietary preferences or restrictions for this product can be mentioned here.",
    },
    {
      title: "Storage Information",
      description:
        "Details about how to store this product properly can be provided in this section.",
    },
    {
      title: "Extra",
      description:
        "Any additional information or notes about the product can be included in this section.",
    },
  ];
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleAddToCart = ({
    id,
    product,
    amount,
  }: {
    id: number;
    product: any;
    amount: number;
  }) => {
    setIsAdded({ ...isAdded, cart: true });
  };


  return (
    <SafeAreaView className="flex-1 bg-white">
    <View className="px-5">
      <View className="flex flex-row justify-between items-center">
        <Pressable
          onPress={() => {router.back()}}
          className="flex p-3 rounded-full justify-center items-center flex-col border border-primary"
          style={{ transform: [{ rotate: "180deg" }] }}
        >
          <MaterialCommunityIcons name="chevron-right" color={colors.primary} size={24}/>
        </Pressable>
      </View>
      <View>
          <Image className='bg-[#0553] w-44 h-44 mx-auto' source={product.image}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}/>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4, justifyContent: "space-between" }}>
        <Text className="text-xl font-bold ">{product.name}</Text>
        <Text className=" font-bold text-primary">
            {product.price} $
        </Text>
      </View>
      <View className="flex flex-row justify-between w-full items-center mt-4">
        <Text className="text-sm font-regular mt-2  text-justify text-gray-500">
            {product.description}
        </Text>
      </View>
        {accordionData.map((item, index) => (
          <Pressable
            key={index}
            onPress={toggleAccordion}
            className="flex-row justify-between items-center mt-4"
          >
            <View className="flex-row w-full flex justify-between items-center">
              <Text className="text-sm font-bold">{item.title}</Text>
              <FontAwesome5
                name={isAccordionOpen ? "chevron-up" : "chevron-down"}
                size={12}
                color={!isAccordionOpen ? "black" : colors.primary}
              />
            </View>
          </Pressable>
        ))}
        {isAccordionOpen && (
          <View className="mt-2">
            {accordionData.map((item, index) => (
              <Text
                key={index}
              >{item.description}</Text>
            ))}
          </View>
        )}
      <View className="flex flex-row justify-between items-center mt-4">
        <View className="flex-row w-full flex justify-between items-center">
          <Pressable
            onPress={() => {
              if (quantity === 1) return;
              setQuantity(quantity - 1);
            }}
            className="flex items-center px-2 py-1 justify-center"
          >
            <View className="border border-[gray] p-2 rounded-lg">
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
            <View className="border border-[gray] p-2 rounded-lg">
              <FontAwesome5 name="plus" size={15} color="gray" />
            </View>
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={() => {
          handleAddToCart({
            id: product.menuItem_id,
            product: product,
            amount: quantity,
          });
        }}
        className={`flex-row justify-center  items-center ${
          isAdded.cart ? "bg-gray-700" : "bg-primary"
        } rounded-full mt-4 py-3`}
        disabled={isAdded.cart}
      >
        <Text className="text-white font-medium text-lg">
          {isAdded.cart ? "Added To Cart" : "Add To Cart"}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {}}
        className="flex-row justify-center items-center rounded-full bg-white mt-4 py-3 border border-primary"
      >
        <Text className="text-primary ml-3 font-medium text-lg">Subscribe to a Plan</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
