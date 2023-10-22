import { View, Text, Image } from "react-native";
import React from "react";
import WeekdayForecastContainer from "../components/WeekdayForecastContainer";
import { WeatherDataProps } from "../types";
import { weatherImages } from "../constants";

export default function ForecastSection({
  current,
  forecast,
  location,
}: WeatherDataProps) {
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* location */}
      <Text className="text-white text-center text-2xl font-bold">
        {location.name},
        <Text className="text-lg font-semibold text-gray-300">
          {" "}
          {location.country}
        </Text>
      </Text>
      {/* weather image */}
      <View className="flex-row justify-center">
        <Image
          source={weatherImages[current?.condition?.text]}
          className="w-52 h-52"
        />
      </View>
      {/* degree celcius */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          {current.temp_c.toFixed(0)}°
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          {current.condition.text}
        </Text>
      </View>
      {/* other stats */}
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/wind.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">
            {current.wind_kph}km/h
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../assets/icons/drop.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">
            {current.humidity}%
          </Text>
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
      {forecast && <WeekdayForecastContainer {...forecast} />}
    </View>
  );
}
