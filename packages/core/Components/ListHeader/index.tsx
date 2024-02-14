import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";
import { ListHeaderProps } from "./types";

export const ListHeader = ({ keys = [], onSort }: ListHeaderProps) => {
  const { styles } = useStyles(componentStyles);

  return (
    <View style={styles.container}>
      {keys.map((key, index) => (
        <TouchableOpacity
          style={
            index === 0 ? [styles.button, styles.buttonFirst] : styles.button
          }
          onPress={() => onSort?.(key[1])}
          key={key[1]}
        >
          <Text style={styles.title} numberOfLines={1}>
            {key[0]}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.removeButton} />
    </View>
  );
};
