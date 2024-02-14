import React, { useRef } from "react";
import { TextInput } from "react-native";

import { InputText } from "@core/Components/base/InputText";
import { InputTextProps } from "@core/Components/base/InputText/types";

export const InputDecimal = ({ ...props }: InputTextProps) => {
  const inputRef = useRef<TextInput>(props.inputRef);

  const handleChange = (currentValue: string) => {
    const realValue = currentValue.replace(/\D/g, "").replace(/[\,]/g, "");
    const realValueNumber = BigInt(realValue);

    let newValue = realValueNumber.toString().padStart(3, "0");

    const formattedValue = `${newValue.slice(0, -2)},${newValue.slice(-2)}`;

    inputRef.current.setNativeProps({ text: formattedValue });
    props.onChangeText?.(formattedValue);
  };

  return (
    <InputText
      {...props}
      onChangeText={handleChange}
      inputRef={inputRef}
      keyboardType="number-pad"
    />
  );
};
