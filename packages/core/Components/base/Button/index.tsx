import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { useStyles } from "@core/Theme";

import { ButtonProps } from "./types";
import { componentStyles } from "./styles";

export const Button = ({ title, ...props }: ButtonProps) => {
  const { styles } = useStyles(componentStyles);

  return (
    <TouchableOpacity
      style={props.disabled ? [styles.button, styles.disabled] : styles.button}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
