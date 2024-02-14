import { TextInputProps } from "react-native";

export type InputTextProps = {
  inputRef?: any;
  title?: string;
  errorMessage?: string;
  leftText?: string;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  isSmall?: boolean;
} & TextInputProps;
