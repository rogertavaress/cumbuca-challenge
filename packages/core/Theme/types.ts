import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { COLORS, THEME } from "./constants";

export type ThemeContantsType = {
  COLORS: typeof COLORS.light | typeof COLORS.dark;
} & typeof THEME;

export type DefaultStyleType = ViewStyle | TextStyle | ImageStyle;
