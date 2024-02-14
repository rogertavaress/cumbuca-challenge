import { STATUSBAR_SPACE } from "@core/Components/Header/constants";
import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BASE,
    marginTop: -STATUSBAR_SPACE,
  } as DefaultStyleType,
});
