import { ProductEntity } from "../entities/product.entity";
import {
  StorageKeysEnum,
  StorageResponseEnum,
  getItem,
  setItem,
} from "../storage.provider";

const getNextId = async (products: ProductEntity[]) => {
  const productIds = new Set(products.map((product) => product.id));

  let nextId = 1;
  while (productIds.has(nextId)) {
    nextId++;
  }

  return nextId;
};

export const addProduct = async (
  newProduct: Omit<ProductEntity, "id" | "total">
) => {
  const product = {
    ...newProduct,
    id: 0,
    total: newProduct.stockQuantity * newProduct.unitPrice,
  } as ProductEntity;

  const products =
    (await getItem<ProductEntity[]>(StorageKeysEnum.PRODUCTS)) ?? [];

  product.id = await getNextId(products);

  return {
    status: await setItem(
      StorageKeysEnum.PRODUCTS,
      [...products, product].sort(({ id: idA }, { id: idB }) => idA - idB)
    ),
    product: product,
  };
};

export const changeProduct = async (id: number, product: ProductEntity) => {
  const updatedProducts = await getProducts();

  const index = updatedProducts.findIndex((product) => product.id === id);
  if (index < 0) {
    return StorageResponseEnum.ERROR;
  }

  updatedProducts[index] = product;

  return setItem(StorageKeysEnum.PRODUCTS, updatedProducts);
};

export const removeProduct = async (id: number) => {
  const updatedProducts = await getProducts();

  const index = updatedProducts.findIndex((product) => product.id === id);
  if (index < 0) {
    return { status: StorageResponseEnum.ERROR };
  }

  updatedProducts.splice(index, 1);

  return {
    status: await setItem(StorageKeysEnum.PRODUCTS, updatedProducts),
    updatedProducts,
  };
};

export const getProducts = async (): Promise<ProductEntity[]> => {
  const products = await getItem<ProductEntity[]>(StorageKeysEnum.PRODUCTS);

  return products ?? [];
};
