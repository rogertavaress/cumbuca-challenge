import React, { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";

export const Container = ({
  children,
  style,
  ...props
}: PropsWithChildren<ViewProps>) => {
  const { styles } = useStyles(componentStyles);
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};
