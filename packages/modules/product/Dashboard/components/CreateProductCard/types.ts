import { ProductEntity } from "@core/Storage/entities/product.entity";

export type CreateProductCardProps = {
  productDefault: { name: string; stockQuantity: string; unitPrice: string };
  onCreateProduct?: (
    newProduct: Omit<ProductEntity, "id" | "total">
  ) => Promise<any> | any;
};
