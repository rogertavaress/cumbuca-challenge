import { Image, Text, TouchableOpacity, View } from "react-native";

import { BackIcon, BackWhiteIcon, MenuIcon, MenuWhiteIcon } from "@core/Assets";
import { useStyles } from "@core/Theme";

import { HeaderProps } from "./types";
import { componentStyles } from "./styles";
import { TEST_IDS } from "./constants";

export const Header = ({
  title,
  onBackPress,
  onSettingsPress,
  withStatusBarSpace = true,
}: HeaderProps) => {
  const { styles, scheme } = useStyles(componentStyles({ withStatusBarSpace }));

  return (
    <View style={styles.container}>
      <View style={[styles.headerSide, styles.headerSideLeft]}>
        {!!onBackPress && (
          <TouchableOpacity onPress={onBackPress} testID={TEST_IDS.BACK_BUTTON}>
            <Image source={scheme === "dark" ? BackWhiteIcon : BackIcon} />
          </TouchableOpacity>
        )}
      </View>
      <Text lineBreakMode="tail" numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <View style={[styles.headerSide, styles.headerSideRight]}>
        {!!onSettingsPress && (
          <TouchableOpacity
            onPress={onSettingsPress}
            testID={TEST_IDS.SETTINGS_BUTTON}
          >
            <Image source={scheme === "dark" ? MenuWhiteIcon : MenuIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
