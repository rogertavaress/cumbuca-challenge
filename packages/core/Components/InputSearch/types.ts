import { InputTextProps } from "@core/Components/base/InputText/types";

export type InputSearchProps = {
  onSearch?: (value: string) => void;
} & Omit<InputTextProps, "rightComponent">;
