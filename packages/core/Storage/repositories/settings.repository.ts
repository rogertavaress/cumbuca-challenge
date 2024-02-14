import { StorageKeysEnum, getItem, setItem } from "../storage.provider";

import { SettingsEntity, SettingsKeyEnum } from "../entities/settings.entity";

const settingsDefault = { biometry: true };

export const getSettings = async (): Promise<SettingsEntity> => {
  const settings = await getItem<SettingsEntity>(StorageKeysEnum.SETTINGS);
  return settings ?? settingsDefault;
};

export const changeSettings = async (key: SettingsKeyEnum, value: boolean) => {
  const updatedSettings = await getSettings();

  updatedSettings[key] = value;

  return setItem(StorageKeysEnum.SETTINGS, updatedSettings);
};
