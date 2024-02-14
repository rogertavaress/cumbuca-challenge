import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.COLORS.GRAY_500,
  } as DefaultStyleType,
  buttonFirst: { flex: 1 } as DefaultStyleType,
  button: {
    flex: 3,
    alignItems: "center",
  } as DefaultStyleType,
  removeButton: {
    width: 20,
    height: 30,
    borderRadius: 5,
  } as DefaultStyleType,
  title: {
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.LG,
    fontWeight: "600",
    textAlign: "center",
  } as DefaultStyleType,
});
