import { STATUSBAR_SPACE } from "@core/Components/Header/constants";
import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: { flex: 1, marginTop: -STATUSBAR_SPACE } as DefaultStyleType,
  content: {
    backgroundColor: theme.COLORS.BASE,
  } as DefaultStyleType,
});
