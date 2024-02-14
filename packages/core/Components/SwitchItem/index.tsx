import React from "react";
import { Switch, Text, View } from "react-native";

import { useStyles } from "@core/Theme";

import { SwitchItemProps } from "./types";
import { componentStyles } from "./styles";

export const SwitchItem = ({ title, value, onChange }: SwitchItemProps) => {
  const { styles, theme } = useStyles(componentStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        trackColor={{
          false: theme.COLORS.GRAY_200,
          true: theme.COLORS.GREEN,
        }}
        thumbColor={theme.COLORS.GRAY_100}
        ios_backgroundColor={theme.COLORS.GRAY_200}
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
};
