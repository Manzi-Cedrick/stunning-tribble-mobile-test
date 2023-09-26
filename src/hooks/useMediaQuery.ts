import { useWindowDimensions } from "react-native";

export default function useMediaQuery() {
  const { width } = useWindowDimensions();

  // media queries object with xxs, 2xs, xs, sm, md, lg, xl, xxl keys
  return {
    xxs: width < 300,
    xx: width < 400,
    xs: width < 500,
    sm: width < 600,
    md: width < 800,
    lg: width < 1000,
    xl: width < 1200,
    xxl: width < 1400,
  }
}
