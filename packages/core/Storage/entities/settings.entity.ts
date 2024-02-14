export enum SettingsKeyEnum {
  BIOMETRY = "biometry",
}

export type SettingsEntity = {
  [key in SettingsKeyEnum]: boolean;
};
