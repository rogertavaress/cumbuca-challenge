import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  disabled: {
    opacity: 0.6,
  } as DefaultStyleType,
  button: {
    backgroundColor: theme.COLORS.BLUE,
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  } as DefaultStyleType,
  title: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "bold",
  } as DefaultStyleType,
});
