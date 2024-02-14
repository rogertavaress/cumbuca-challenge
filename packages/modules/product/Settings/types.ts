export enum SettingsTypeEnum {
  SWITCH = "switch",
}

export enum SettingsKeyEnum {
  THEME = "theme",
  BIOMETRY = "biometry",
}

export type SettingsType = {
  type: SettingsTypeEnum;
  title: string;
  key: SettingsKeyEnum;
  value: boolean;
};
