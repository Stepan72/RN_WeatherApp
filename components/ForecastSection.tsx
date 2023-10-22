import { View, Text, Image } from "react-native";
import React from "react";
import WeekdayForecastContainer from "../components/WeekdayForecastContainer";

export default function ForecastSection() {
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* location */}
      <Text className="text-white text-center text-2xl font-bold">
        London,
        <Text className="text-lg font-semibold text-gray-300">
          United Kingdom
        </Text>
      </Text>
      {/* weather image */}
      <View className="flex-row justify-center">
        <Image
          source={require("../assets/images/cloud.png")}
          className="w-52 h-52"
        />
      </View>
      {/* degree celcius */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          23°
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          Cloud
        </Text>
      </View>
      {/* other stats */}
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/wind.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">2m/s</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/drop.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">23%</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/sun.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">6:05 AM</Text>
        </View>
      </View>
      {/* forecast for next days */}
      <WeekdayForecastContainer />
    </View>
  );
}
