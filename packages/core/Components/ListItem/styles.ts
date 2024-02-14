import { ImageStyle } from "react-native";
import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.COLORS.GRAY_300,
    marginTop: 5,
  } as DefaultStyleType,
  buttonFirst: { flex: 1 },
  button: {
    flex: 3,
    alignItems: "center",
  } as DefaultStyleType,
  removeButton: {
    width: 20,
    backgroundColor: theme.COLORS.BLUE,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  } as DefaultStyleType,
  removeButtonIcon: {
    width: 14,
    height: 20,
  } as ImageStyle,
  title: {
    color: theme.COLORS.INVERSE,
    fontSize: theme.FONT_SIZE.SM,
    fontWeight: "normal",
    textAlign: "center",
  } as DefaultStyleType,
});
