import { FlatListProps } from "react-native";

import { SettingsType } from "@modules/product/Settings/types";

export type ChangeSettingsProps = {
  header: FlatListProps<any>["ListHeaderComponent"];
  onChangeItem?: (key: SettingsType["key"], value: boolean) => void;
  settings?: SettingsType[];
};
