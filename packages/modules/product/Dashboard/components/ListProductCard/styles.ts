import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.COLORS.BASE,
  } as DefaultStyleType,
  content: {
    backgroundColor: theme.COLORS.BASE,
  } as DefaultStyleType,
});
