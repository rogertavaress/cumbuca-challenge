import React from "react";
import { View, ViewProps } from "react-native";

import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";

export const Card = ({ style, ...props }: ViewProps) => {
  const { styles } = useStyles(componentStyles);
  return <View {...props} style={[styles.container, style]} />;
};
