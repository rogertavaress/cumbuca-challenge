import React, { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from "react-native";

import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";

export const KeyboardAvoidingViewContainer = ({
  children,
}: PropsWithChildren<KeyboardAvoidingViewProps>) => {
  const { styles } = useStyles(componentStyles);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
