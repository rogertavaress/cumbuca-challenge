import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    backgroundColor: theme.COLORS.BASE,
    flexGrow: 1,
  } as DefaultStyleType,
});
