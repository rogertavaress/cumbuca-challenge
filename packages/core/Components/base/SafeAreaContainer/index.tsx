import React, { PropsWithChildren } from "react";
import { SafeAreaView, ViewProps } from "react-native";

import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";

export const SafeAreaContainer = ({
  children,
  style,
  ...props
}: PropsWithChildren<ViewProps>) => {
  const { styles } = useStyles(componentStyles);
  return (
    <SafeAreaView {...props} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};
