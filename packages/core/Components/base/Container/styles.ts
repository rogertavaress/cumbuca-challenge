import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    backgroundColor: theme.COLORS.BASE,
    flex: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  } as DefaultStyleType,
});
