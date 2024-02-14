import { TextInputProps } from "react-native";

export type InputTextProps = {
  inputRef?: any;
  title?: string;
  errorMessage?: string;
  leftText?: string;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  defaultCanShowError?: boolean;
  isSmall?: boolean;
} & TextInputProps;
