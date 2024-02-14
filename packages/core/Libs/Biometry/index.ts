import * as LocalAuthentication from "expo-local-authentication";
import { useCallback, useEffect, useState } from "react";

import {
  changeSettings,
  getSettings,
} from "../../Storage/repositories/settings.repository";
import { SettingsKeyEnum } from "../../Storage/entities/settings.entity";

export const biometry = async () => {
  const { success } = await LocalAuthentication.authenticateAsync({
    promptMessage: "Login",
  });
  return success;
};

export const hardwareBiometry = async () =>
  LocalAuthentication.hasHardwareAsync();

export const useBiometry = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>();

  const getBiometry = async () => {
    try {
      const [hasBiometry, { biometry }] = await Promise.all([
        hardwareBiometry(),
        getSettings(),
      ]);
      setIsEnabled(hasBiometry && biometry);
    } catch (err) {
      setIsEnabled(false);
    }
  };

  const changeBiometry = useCallback(async (updatedIsEnabled: boolean) => {
    const hasBiometry = await hardwareBiometry();
    if (!hasBiometry) {
      return;
    }
    setIsEnabled(updatedIsEnabled);
    changeSettings(SettingsKeyEnum.BIOMETRY, updatedIsEnabled);
  }, []);

  useEffect(() => {
    getBiometry();
  }, []);

  return {
    isBiometryEnabled: isEnabled,
    changeBiometry,
  };
};
