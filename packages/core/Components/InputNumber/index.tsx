import React from "react";
import { Image, TouchableOpacity } from "react-native";

import {
  MinusIcon,
  PlusIcon,
  MinusWhiteIcon,
  PlusWhiteIcon,
} from "@core/Assets";
import { useStyles } from "@core/Theme";
import { InputText } from "@core/Components/base/InputText";

import { InputNumberProps } from "./types";
import { componentStyles } from "./styles";
import { TEST_IDS } from "./constants";

export const InputNumber = ({
  minValue,
  maxValue,
  isSmall = false,
  value = "0",
  defaultValue,
  ...props
}: InputNumberProps) => {
  const { styles, scheme } = useStyles(componentStyles);

  const handleChange = (newValue: number) => {
    let updatedStateValue = Number(value) + newValue;

    if (typeof maxValue !== "undefined" && updatedStateValue > maxValue) {
      updatedStateValue = maxValue;
    } else if (
      typeof minValue !== "undefined" &&
      updatedStateValue < minValue
    ) {
      updatedStateValue = minValue;
    }

    props.onChangeText?.(String(updatedStateValue));
  };

  return (
    <InputText
      defaultValue={String(value)}
      textAlign="center"
      editable={false}
      isSmall={isSmall}
      {...props}
      value={value}
      leftComponent={
        <TouchableOpacity
          style={isSmall ? [styles.button, styles.buttonSmall] : styles.button}
          onPress={() => handleChange(-1)}
          testID={
            props.testID
              ? `${props.testID}_decrement`
              : TEST_IDS.DECREMENT_BUTTON
          }
        >
          <Image
            source={scheme === "dark" ? MinusWhiteIcon : MinusIcon}
            style={isSmall ? [styles.image, styles.imageSmall] : styles.image}
          />
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity
          style={isSmall ? [styles.button, styles.buttonSmall] : styles.button}
          onPress={() => handleChange(1)}
          testID={
            props.testID
              ? `${props.testID}_increment`
              : TEST_IDS.INCREMENT_BUTTON
          }
        >
          <Image
            source={scheme === "dark" ? PlusWhiteIcon : PlusIcon}
            style={isSmall ? [styles.image, styles.imageSmall] : styles.image}
          />
        </TouchableOpacity>
      }
    />
  );
};
