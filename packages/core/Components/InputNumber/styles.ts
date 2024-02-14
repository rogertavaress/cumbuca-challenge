import { ImageStyle } from "react-native";

import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  button: {
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  } as DefaultStyleType,
  buttonSmall: {
    paddingHorizontal: 0,
    minHeight: 25,
    minWidth: 25,
  } as DefaultStyleType,
  image: {} as ImageStyle,
  imageSmall: {
    width: 15,
    height: 15,
  } as ImageStyle,
});
