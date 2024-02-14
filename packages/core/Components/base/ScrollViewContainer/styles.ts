import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  scrollview: {
    contentContainerStyle: { flexGrow: 1, backgroundColor: theme.COLORS.BASE },
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
  } as DefaultStyleType,
  view: {
    flex: 1,
  } as DefaultStyleType,
});
