import { ImageProps } from "react-native";

export const apiKey = "23a91069585d4982b6980126232210";

export const weatherImages: { [key: string]: ImageProps } = {
  "Partly cloudy": require("../assets/images/partlycloudy.png"),
  "Moderate rain": require("../assets/images/moderaterain.png"),
  "Patchy rain possible": require("../assets/images/moderaterain.png"),
  Sunny: require("../assets/images/sun.png"),
  Clear: require("../assets/images/sun.png"),
  Overcast: require("../assets/images/cloud.png"),
  Cloudy: require("../assets/images/cloud.png"),
  "Light rain": require("../assets/images/moderaterain.png"),
  "Moderate rain at times": require("../assets/images/moderaterain.png"),
  "Heavy rain": require("../assets/images/heavyrain.png"),
  "Heavy rain at times": require("../assets/images/heavyrain.png"),
  "Moderate or heavy freezing rain": require("../assets/images/heavyrain.png"),
  "Moderate or heavy rain shower": require("../assets/images/heavyrain.png"),
  "Moderate or heavy rain with thunder": require("../assets/images/heavyrain.png"),
  Mist: require("../assets/images/mist.png"),
  other: require("../assets/images/moderaterain.png"),
};

export const initialData = {
  location: {
    country: "United Kingdom",
    name: "London",
  },
  current: {
    temp_c: 36,
    humidity: 40,
    wind_kph: 2,
    condition: {
      text: "Cloudly",
    },
  },
};
