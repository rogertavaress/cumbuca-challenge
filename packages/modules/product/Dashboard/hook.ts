import { useCallback, useEffect, useState } from "react";

import {
  addProduct,
  changeProduct,
  getProducts,
  removeProduct,
} from "@core/Storage/repositories/product.repository";
import { ProductEntity } from "@core/Storage/entities/product.entity";
import { StorageResponseEnum } from "@core/Storage/storage.provider";
import { useNavigation } from "@core/Navigation";

import { ProductScreenNames } from "@modules/product/product.constants";

import { Order, SortByType } from "./types";

const sortByDefault = { key: "id", type: Order.ASC } as SortByType;

export const useDashboard = () => {
  const { navigate } = useNavigation();
  const [products, setProducts] = useState<ProductEntity[]>([]);
  const [searchedBy, setSearchedBy] = useState<string>("");
  const [sortedBy, setSortedBy] = useState<SortByType>(sortByDefault);

  const handleCreateProduct = useCallback(
    async (product: Parameters<typeof addProduct>[0]) => {
      const storageResponse = await addProduct(product);
      if (storageResponse.status === StorageResponseEnum.OK) {
        setProducts((oldProducts) => [...oldProducts, storageResponse.product]);
      }
      return storageResponse.status;
    },
    []
  );

  const handleChangeOrder = useCallback(
    (from: number, to: number) => {
      const updatedProducts = [...products];
      const [movedProduct] = updatedProducts.splice(from, 1);
      updatedProducts.splice(to, 0, movedProduct);
      setProducts(updatedProducts);
    },
    [products]
  );

  const handleChangeQuantity = useCallback(
    async (id: number, updatedQuantity: number) => {
      const updatedProducts = [...products];
      const index = updatedProducts.findIndex((product) => product.id === id);
      if (index < 0) {
        return;
      }
      updatedProducts[index].stockQuantity = updatedQuantity;
      updatedProducts[index].total =
        updatedQuantity * updatedProducts[index].unitPrice;
      setProducts(updatedProducts);
      await changeProduct(id, updatedProducts[index]);
    },
    [products]
  );

  const handleSort = useCallback(
    (key: keyof ProductEntity) => {
      const updatedSortBy = {
        key,
        type:
          sortedBy.key !== key
            ? Order.ASC
            : sortedBy.type === Order.ASC
            ? Order.DES
            : Order.ASC,
      };

      setProducts((oldProducts) => [
        ...oldProducts.sort((prodA, prodB) => {
          const comparation =
            updatedSortBy.type === Order.ASC
              ? prodA[key] < prodB[key]
              : prodA[key] > prodB[key];

          return comparation ? -1 : 1;
        }),
      ]);
      setSortedBy(updatedSortBy);
    },
    [sortedBy]
  );

  const handleSearch = useCallback(
    async (searchBy: string = "") => {
      if (searchBy === searchedBy) {
        return;
      }
      const allProducts = await getProducts();
      setProducts(
        allProducts.filter((product) =>
          product.name
            .toLocaleLowerCase()
            .includes(searchBy?.toLocaleLowerCase())
        )
      );
      setSearchedBy(searchBy);
      setSortedBy({ ...sortByDefault });
    },
    [searchedBy]
  );

  const handleRemoveProduct = useCallback(async (id: number) => {
    const storageResponse = await removeProduct(id);
    if (
      storageResponse.status === StorageResponseEnum.OK &&
      storageResponse.updatedProducts
    ) {
      setProducts(storageResponse.updatedProducts);
    }
    return storageResponse.status;
  }, []);

  const handleGoToSettins = useCallback(() => {
    navigate(ProductScreenNames.SETTINGS);
  }, [navigate]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return {
    products,
    handleCreateProduct,
    handleChangeOrder,
    handleChangeQuantity,
    handleSort,
    handleSearch,
    handleRemoveProduct,
    handleGoToSettins,
  };
};
