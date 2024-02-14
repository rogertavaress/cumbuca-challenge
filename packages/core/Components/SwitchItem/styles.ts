import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  } as DefaultStyleType,
  title: {
    color: theme.COLORS.INVERSE,
    fontSize: theme.FONT_SIZE.LG,
    fontWeight: "700",
  } as DefaultStyleType,
});
