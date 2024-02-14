import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_200,
    justifyContent: "center",
  } as DefaultStyleType,
});
