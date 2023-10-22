import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import ForecastSection from "../components/ForecastSection";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocaion = (location: number) => {
    console.log("Location");
  };

  return (
    <View className="flex-1 relative">
      <Image
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
        blurRadius={70}
      />
      <SafeAreaView className="flex-1 flex">
        {/* search bar */}
        <View className="mx-4 relative z-50" style={{ height: "7%" }}>
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch && (
              <TextInput
                placeholder="Search City"
                placeholderTextColor="lightgray"
                className="h-10 pl-6  flex-1 text-base text-white"
              />
            )}

            <TouchableOpacity
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
              onPress={() => setShowSearch((prevValue) => !prevValue)}
            >
              <MagnifyingGlassIcon size={25} color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((el, index) => {
                let lastEl = index + 1 != locations.length;

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      handleLocaion(el);
                    }}
                    className={`flex-row items-center border-0 p-3 px-4 mb-1  ${
                      lastEl ? "border-b-2 border-b-gray-400" : ""
                    }`}
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text className="text-black text-lg ml-2">
                      London, United Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* forecast section */}
        <ForecastSection />
      </SafeAreaView>
    </View>
  );
}

/// 10:42
