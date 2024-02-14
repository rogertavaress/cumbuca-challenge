import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

import { CONTAINER_SPACE, PADDING, STATUSBAR_SPACE } from "./constants";

export const componentStyles =
  (props: { withStatusBarSpace: boolean }) => (theme: ThemeContantsType) => ({
    container: {
      backgroundColor: theme.COLORS.BLUE_INVERSE,
      marginTop: props.withStatusBarSpace ? -STATUSBAR_SPACE : 0,
      paddingHorizontal: 20,
      paddingVertical: PADDING,
      marginBottom: CONTAINER_SPACE,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    } as DefaultStyleType,
    headerSide: { flex: 1, flexDirection: "row" } as DefaultStyleType,
    headerSideLeft: { justifyContent: "flex-start" } as DefaultStyleType,
    headerSideRight: { justifyContent: "flex-end" } as DefaultStyleType,
    title: {
      color: theme.COLORS.INVERSE,
      fontSize: theme.FONT_SIZE.XL,
      fontWeight: "700",
      textAlign: "center",
    } as DefaultStyleType,
  });
