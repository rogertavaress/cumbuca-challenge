import { ProductEntity } from "@core/Storage/entities/product.entity";

export enum Order {
  ASC = "-",
  DES = "+",
}

export type SortByType = {
  key: keyof ProductEntity;
  type: Order;
};
