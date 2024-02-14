import React from "react";
import { View } from "react-native";

import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";

export const Separator = () => {
  const { styles } = useStyles(componentStyles);

  return <View style={styles.container} />;
};
