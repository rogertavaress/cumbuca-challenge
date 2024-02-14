import { InputTextProps } from "@core/Components/base/InputText/types";

export type InputNumberProps = {
  minValue?: number;
  maxValue?: number;
  isSmall?: boolean;
} & Omit<InputTextProps, "rightComponent">;
