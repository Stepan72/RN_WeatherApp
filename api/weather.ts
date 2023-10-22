import axios from "axios";

import { apiKey } from "../constants";

interface ForecastEndpointProps {
  cityName: string;
  days: number;
}

interface LocationEndpointProps {
  cityName: string;
}
const forecastEndpoint = ({ cityName, days }: ForecastEndpointProps) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`;

const locationEndpoint = ({ cityName }: LocationEndpointProps) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchWeatherForecast = ({
  cityName,
  days,
}: ForecastEndpointProps) => {
  const forecastUrl = forecastEndpoint({ cityName, days });
  return apiCall(forecastUrl);
};

export const fetchLocations = (cityName: LocationEndpointProps) => {
  const locationUrl = locationEndpoint(cityName);
  return apiCall(locationUrl);
};
