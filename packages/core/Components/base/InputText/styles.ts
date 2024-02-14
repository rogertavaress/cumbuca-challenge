import { DefaultStyleType, ThemeContantsType } from "@core/Theme/types";

export const componentStyles = (theme: ThemeContantsType) => ({
  container: {
    marginVertical: 10,
  } as DefaultStyleType,
  containerSmall: {
    marginVertical: 0,
  } as DefaultStyleType,
  content: {
    marginTop: 5,
    borderRadius: 10,
    borderColor: theme.COLORS.GRAY_200,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  } as DefaultStyleType,
  contentSmall: {
    marginTop: 0,
    borderWidth: 1,
    borderColor: theme.COLORS.INVERSE,
  } as DefaultStyleType,
  title: {
    color: theme.COLORS.INVERSE,
    fontSize: theme.FONT_SIZE.LG,
    fontWeight: "600",
  } as DefaultStyleType,
  error: {
    color: theme.COLORS.RED_INVERSE,
    fontSize: theme.FONT_SIZE.SM,
    marginTop: 5,
  } as DefaultStyleType,
  input: {
    borderRadius: 10,
    color: theme.COLORS.INVERSE,
    flex: 1,
    fontSize: theme.FONT_SIZE.MD,
    height: 50,
    paddingHorizontal: 15,
  } as DefaultStyleType,
  inputSmall: {
    color: theme.COLORS.INVERSE,
    fontSize: theme.FONT_SIZE.SM,
    height: 30,
    paddingHorizontal: 2,
    minWidth: 30,
  } as DefaultStyleType,
  inputSideText: {
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.INVERSE,
    paddingLeft: 15,
  } as DefaultStyleType,
});
