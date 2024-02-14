import { useCallback, useEffect, useState } from "react";

import { useNavigation } from "@core/Navigation";
import { useTheme } from "@core/Theme";
import { useBiometry } from "@core/Libs/Biometry";

import { SettingsKeyEnum, SettingsType, SettingsTypeEnum } from "./types";

const settingsDefault = [
  {
    type: SettingsTypeEnum.SWITCH,
    title: "Dark Mode",
    key: SettingsKeyEnum.THEME,
    value: false,
  },
  {
    type: SettingsTypeEnum.SWITCH,
    title: "Biometria",
    key: SettingsKeyEnum.BIOMETRY,
    value: false,
  },
] as SettingsType[];

export const useSettings = () => {
  const { changeTheme, scheme } = useTheme();
  const { isBiometryEnabled, changeBiometry } = useBiometry();
  const [settings, setSettings] = useState<SettingsType[]>(settingsDefault);
  const { goBack } = useNavigation();

  const handleChangeItem = useCallback(
    (key: SettingsType["key"], value: boolean) => {
      switch (key) {
        case SettingsKeyEnum.THEME:
          changeTheme(value ? "dark" : "light");
          break;
        case SettingsKeyEnum.BIOMETRY:
          changeBiometry(value);
          break;
      }
    },
    []
  );

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  useEffect(() => {
    setSettings((oldSettings) => [
      ...oldSettings.map((settingsItem) => {
        switch (settingsItem.key) {
          case SettingsKeyEnum.THEME:
            settingsItem.value = scheme === "dark";
            break;
          case SettingsKeyEnum.BIOMETRY:
            settingsItem.value = isBiometryEnabled ?? true;
            break;
        }
        return settingsItem;
      }),
    ]);
  }, [isBiometryEnabled, scheme]);

  return { settings, handleChangeItem, handleGoBack };
};
