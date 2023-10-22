import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { dailyForecast } from "../constants";
import WeekdayForecastCard from "./WeekdayForecastCard";

export default function WeekdayForecastContainer() {
  return (
    <View className=" space-y-3">
      <View className="flex-row items-center mx-5 space-x-2">
        <CalendarDaysIcon size={22} color="white" />
        <Text className="text-white text-base">Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {dailyForecast.map((day, index) => {
          return (
            <WeekdayForecastCard
              weekday={day.weekday}
              temperature={day.temperature}
              key={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
