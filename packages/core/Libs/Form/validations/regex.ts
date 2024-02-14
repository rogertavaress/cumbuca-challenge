import { FormValidationType } from "../Form.types";

export const validateRegex =
  (regex: RegExp): FormValidationType =>
  (value: string): boolean => {
    return regex.test(value);
  };
