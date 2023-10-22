import { View, Text, Image } from "react-native";
import React from "react";
import { theme } from "../theme";

interface WeekdayForecastCardProps {
  weekday: string;
  temperature: number;
}

export default function WeekdayForecastCard({
  weekday,
  temperature,
}: WeekdayForecastCardProps) {
  return (
    <View
      className="flex justify-center items-center w-24 rounded-3xl py-2 space-y-1 mr-4"
      style={{ backgroundColor: theme.bgWhite(0.15) }}
    >
      <Image
        source={require("../assets/images/heavyrain.png")}
        className="w-11 h-11"
      />
      <Text className="text-white">{weekday}</Text>
      <Text className="text-white text-xl font-semibold">{temperature}°</Text>
    </View>
  );
}
