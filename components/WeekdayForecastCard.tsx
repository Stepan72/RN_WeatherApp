import { View, Text, Image } from "react-native";
import React from "react";
import { theme } from "../theme";
import { weatherImages } from "../constants";

interface WeekdayForecastCardProps {
  data: string;
  temperature: number;
  condition: string;
}

export default function WeekdayForecastCard({
  data,
  temperature,
  condition,
}: WeekdayForecastCardProps) {
  const weekday = new Date(data);
  const options: {
    weekday: "long" | "short";
  } = { weekday: "long" };
  const dayName = weekday.toLocaleDateString("en-US", options).split(",")[0];

  return (
    <View
      className="flex justify-center items-center w-24 rounded-3xl py-2 space-y-1 mr-4"
      style={{ backgroundColor: theme.bgWhite(0.15) }}
    >
      <Image source={weatherImages[condition]} className="w-11 h-11" />
      <Text className="text-white">{dayName}</Text>
      <Text className="text-white text-xl font-semibold">
        {temperature.toFixed(0)}°
      </Text>
    </View>
  );
}
