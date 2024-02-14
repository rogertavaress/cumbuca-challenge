import { ColorSchemeName } from "react-native";

import { COLORS, THEME } from "./constants";

export const getThemeContants = (theme: ColorSchemeName = "light") => ({
  COLORS: theme === "dark" ? COLORS.dark : COLORS.light,
  ...THEME,
});
