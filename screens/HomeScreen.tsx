import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import ForecastSection from "../components/ForecastSection";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { LocationDataProps, WeatherDataProps } from "../types";
import { initialData } from "../constants";
import * as Progress from "react-native-progress";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState<LocationDataProps[] | []>([]);
  const [weather, setWeather] = useState<WeatherDataProps>(initialData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleLocaion("Dubai");
  }, []);

  const handleLocaion = (location: string) => {
    setLocations([]);
    setShowSearch(false);
    setIsLoading(true);
    fetchWeatherForecast({ cityName: location, days: 7 }).then(
      (data: WeatherDataProps) => {
        setWeather(data);
        setIsLoading(false);
      }
    );
  };

  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data: LocationDataProps[]) => {
        setLocations(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 500), []);

  return (
    <View className="flex-1 relative">
      <Image
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
        blurRadius={70}
      />
      {isLoading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail thickness={10} size={100} color="#0bb3b2" />
        </View>
      ) : (
        <SafeAreaView className="flex-1 flex">
          {/* search bar */}
          <View className="mx-4 relative z-50" style={{ height: "7%" }}>
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: showSearch
                  ? theme.bgWhite(0.2)
                  : "transparent",
              }}
            >
              {showSearch && (
                <TextInput
                  onChangeText={handleTextDebounce}
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
                        handleLocaion(el.name);
                      }}
                      className={`flex-row items-center border-0 p-3 px-4 mb-1  ${
                        lastEl ? "border-b-2 border-b-gray-400" : ""
                      }`}
                    >
                      <MapPinIcon size={20} color="gray" />
                      <Text className="text-black text-lg ml-2">
                        {el.name}, {el.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
          {/* forecast section */}
          <ForecastSection {...weather} />
        </SafeAreaView>
      )}
    </View>
  );
}
