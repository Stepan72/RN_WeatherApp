import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import WeekdayForecastCard from "./WeekdayForecastCard";
import { ForecastDaysDataProps } from "../types";

interface WeekdayForecastContainerProps {
  forecastday: ForecastDaysDataProps[];
}

export default function WeekdayForecastContainer({
  forecastday,
}: WeekdayForecastContainerProps) {
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
        {forecastday.map((day, index) => {
          return (
            <WeekdayForecastCard
              data={day.date}
              temperature={day.day.avgtemp_c}
              key={index}
              condition={day.day.condition.text}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
