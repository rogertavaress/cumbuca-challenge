import { useCallback, useMemo } from "react";
import {
  Appearance,
  ColorSchemeName,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { ThemeContantsType } from "./types";
import { getThemeContants } from "./utils";

export const useTheme = () => {
  const scheme = useColorScheme();
  const theme = useMemo(
    () => getThemeContants(Appearance.getColorScheme()),
    [scheme]
  );

  const changeTheme = useCallback(
    async (updatedScheme: ColorSchemeName) => {
      Appearance.setColorScheme(updatedScheme);
    },
    [scheme]
  );

  return {
    changeTheme,
    scheme,
    theme,
  };
};

export const useStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  getStyles?: (theme: ThemeContantsType) => T & StyleSheet.NamedStyles<any>
): { styles: T; theme: ThemeContantsType; scheme: ColorSchemeName } => {
  const { scheme, theme } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create(getStyles?.(theme) ?? ({} as T));
  }, [scheme]);
  return { styles, theme, scheme };
};
