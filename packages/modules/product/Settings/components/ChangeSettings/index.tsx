import React from "react";
import { FlatList } from "react-native";

import { SwitchItem } from "@core/Components/SwitchItem";
import { Separator } from "@core/Components/base/Separator";

import { ChangeSettingsProps } from "./types";

export const ChangeSettings = ({
  header,
  onChangeItem,
  settings = [],
}: ChangeSettingsProps) => {
  return (
    <FlatList
      bounces={false}
      data={settings}
      ListHeaderComponent={header}
      keyExtractor={({ key }) => key}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) =>
        item.type === "switch" ? (
          <SwitchItem
            title={item.title}
            value={item.value}
            onChange={(updatedValue) => onChangeItem?.(item.key, updatedValue)}
          />
        ) : (
          <></>
        )
      }
    />
  );
};
