import { createContext } from "react";

type ThemeType = {
  [key: string]: string;
};

export const theme: ThemeType = {
  primary: "yellow-400",
  secondary: "blue-600",
  gradientColors: "from-yellow-400 to-blue-600",
  iconColorPrimary : "text-yellow-400",
  iconColorSecondary: "text-blue-600",
  inputBgColor:  "bg-gray-800",
  inputBorderColor: "border-gray-600"
};

export const ThemeContext = createContext<ThemeType>(theme);