import * as LocalAuthentication from "expo-local-authentication";

export const biometry = async () => {
  const { success } = await LocalAuthentication.authenticateAsync({
    promptMessage: "Login",
  });
  return success;
};

export const hardwareBiometry = async () =>
  LocalAuthentication.hasHardwareAsync();
