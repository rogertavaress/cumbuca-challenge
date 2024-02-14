import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    backgroundColor: theme.COLORS.BASE,
    flex: 1,
  } as DefaultStyleType,
});
