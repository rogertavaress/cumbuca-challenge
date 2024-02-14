import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    backgroundColor: theme.COLORS.GRAY_100,
    flex: 1,
    borderRadius: 10,

    paddingVertical: 30,
    paddingHorizontal: 20,

    shadowColor: theme.COLORS.GRAY_600,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  } as DefaultStyleType,
});
