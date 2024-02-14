import React, { PropsWithChildren } from "react";
import { ScrollView, View, ViewProps } from "react-native";

import { useStyles } from "@core/Theme";

import { KeyboardAvoidingViewContainer } from "../KeyboardAvoidingViewContainer";

import { componentStyles } from "./styles";

export const ScrollViewContainer = ({
  children,
  style,
  ...props
}: PropsWithChildren<ViewProps>) => {
  const { styles } = useStyles(componentStyles);
  return (
    <KeyboardAvoidingViewContainer>
      <ScrollView style={styles.scrollview} bounces={false}>
        <View style={[styles.view, style]} {...props}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingViewContainer>
  );
};
