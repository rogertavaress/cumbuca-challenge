import React from "react";
import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";

import { InputNumber } from "@core/Components/InputNumber";
import { TrashIcon } from "@core/Assets";
import { useStyles } from "@core/Theme";

import { ListItemProps } from "./types";
import { componentStyles } from "./styles";
import { TEST_IDS } from "./constants";

export const ListItem = ({
  item: items,
  drag,
  isActive,
  removeItem,
}: ListItemProps) => {
  const { styles } = useStyles(componentStyles);

  const handleRemove = () => {
    Alert.alert(
      "Remover o produto " + items[1].value,
      "Tem certeza de que deseja remover este produto? Esta ação é irreversível.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          isPreferred: true,
          onPress: () => removeItem?.(Number(items[0].value)),
        },
      ]
    );
  };

  return (
    <ScaleDecorator>
      <Pressable
        key={items[0].value}
        style={styles.container}
        onLongPress={drag}
        disabled={isActive}
      >
        {items.map(({ value, action }, index) => {
          return (
            <View
              style={
                index === 0
                  ? [styles.button, styles.buttonFirst]
                  : styles.button
              }
              key={`${items[0].value}-${index}`}
            >
              {!!action ? (
                <InputNumber
                  isSmall
                  value={value?.toString().padStart(2, "0")}
                  minValue={0}
                  onChangeText={(updatedValue) => {
                    if (Number(updatedValue) < 1) {
                      handleRemove();
                    } else {
                      action?.(Number(updatedValue));
                    }
                  }}
                />
              ) : (
                <Text style={styles.title} numberOfLines={1}>
                  {value}
                </Text>
              )}
            </View>
          );
        })}
        <TouchableOpacity
          style={styles.removeButton}
          onPress={handleRemove}
          testID={`${TEST_IDS.REMOVE_BUTTON}_${items[0].value}`}
        >
          <Image source={TrashIcon} style={styles.removeButtonIcon} />
        </TouchableOpacity>
      </Pressable>
    </ScaleDecorator>
  );
};
