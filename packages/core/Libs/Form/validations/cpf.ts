import { FormValidationType } from "../Form.types";

export const validateCPF: FormValidationType = (cpf: string): boolean => {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (cleanedCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanedCPF)) {
    return false;
  }

  const cpfArray = cleanedCPF.split("").map(Number);

  const calculatedFirstDigit =
    (cpfArray
      .slice(0, 9)
      .reduce((sum, digit, index) => sum + digit * (10 - index), 0) *
      10) %
    11;
  const calculatedSecondDigit =
    (cpfArray
      .slice(0, 10)
      .reduce((sum, digit, index) => sum + digit * (11 - index), 0) *
      10) %
    11;

  return (
    calculatedFirstDigit === cpfArray[9] &&
    calculatedSecondDigit === cpfArray[10]
  );
};
