export type StackParamList = {
  Home: undefined;
};

export interface LocationDataProps {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

export interface WeatherDataProps {
  current: CurrentWeatherDataProps;
  forecast?: {
    forecastday: ForecastDaysDataProps[];
  };
  location: {
    country: string;
    name: string;
  };
}

export interface CurrentWeatherDataProps {
  cloud?: number;
  temp_c: number;
  condition: {
    code?: number;
    icon?: string;
    text: string;
  };
  humidity: number;
  wind_kph: number;
}

export interface ForecastDaysDataProps {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
}
