import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { useStyles } from "@core/Theme";

import { InputTextProps } from "./types";
import { componentStyles } from "./styles";

export const InputText = ({
  title,
  onChangeText,
  leftText,
  leftComponent,
  rightComponent,
  inputRef,
  errorMessage,
  isSmall,
  defaultCanShowError = false,
  ...props
}: InputTextProps) => {
  const { styles, theme, scheme } = useStyles(componentStyles);
  const [canShowError, setCanShowError] = useState(defaultCanShowError);

  const handleBlur = () => {
    setCanShowError(true);
  };

  const handleFocus = () => {
    setCanShowError(false);
  };

  return (
    <View
      style={
        isSmall ? [styles.container, styles.containerSmall] : styles.container
      }
    >
      {!!title && <Text style={styles.title}>{title}</Text>}
      <View
        style={isSmall ? [styles.content, styles.contentSmall] : styles.content}
      >
        {!!leftText && <Text style={[styles.inputSideText]}>{leftText}</Text>}
        {leftComponent}
        <TextInput
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          style={isSmall ? [styles.inputSmall] : styles.input}
          onChangeText={onChangeText}
          placeholderTextColor={
            scheme === "dark" ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_200
          }
        />
        {rightComponent}
      </View>
      {!isSmall && (
        <Text
          style={[
            styles.error,
            { opacity: Number(canShowError && !!errorMessage) },
          ]}
        >
          {errorMessage ?? "Error"}
        </Text>
      )}
    </View>
  );
};
