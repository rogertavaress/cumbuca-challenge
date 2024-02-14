import React from "react";
import DraggableFlatList from "react-native-draggable-flatlist";

import { ListItem } from "@core/Components/ListItem";
import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";
import { ListProductCardProps } from "./types";

export const ListProductCard = ({
  products,
  header,
  onChangeOrder,
  onChangeQuantity,
  onRemoveItem,
}: ListProductCardProps) => {
  const { styles } = useStyles(componentStyles);

  return (
    <DraggableFlatList
      containerStyle={styles.container}
      style={styles.content}
      bounces={false}
      ListHeaderComponent={header}
      data={products}
      onDragEnd={({ from, to }) => from !== to && onChangeOrder?.(from, to)}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({
        item: { id, name, unitPrice, stockQuantity, total },
        ...info
      }) => {
        const item = [
          { value: id },
          { value: name },
          { value: unitPrice },
          {
            value: stockQuantity,
            action: (actionNumber: number) =>
              onChangeQuantity?.(id, actionNumber),
          },
          { value: total },
        ];
        return <ListItem item={item} {...info} removeItem={onRemoveItem} />;
      }}
    />
  );
};
