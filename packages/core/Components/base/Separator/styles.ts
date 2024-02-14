import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    height: 1,
    backgroundColor: theme.COLORS.GRAY_100,
    marginVertical: 15,
  } as DefaultStyleType,
});
