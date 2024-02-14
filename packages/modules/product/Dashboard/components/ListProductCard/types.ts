import DraggableFlatList from "react-native-draggable-flatlist";

import { ProductEntity } from "@core/Storage/entities/product.entity";

export type ListProductCardProps = {
  products: ProductEntity[];
  header?: Parameters<typeof DraggableFlatList>[0]["ListHeaderComponent"];
  onChangeOrder?: (from: number, to: number) => void;
  onChangeQuantity?: (id: number, actionNumber: number) => void;
  onRemoveItem?: (id: number) => void;
};
