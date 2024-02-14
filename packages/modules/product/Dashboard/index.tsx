import React from "react";

import { Container } from "@core/Components/base/Container";
import { Header } from "@core/Components/Header";
import { ListHeader } from "@core/Components/ListHeader";
import { ListHeaderProps } from "@core/Components/ListHeader/types";
import { InputSearch } from "@core/Components/InputSearch";

import { CreateProductCard } from "./components/CreateProductCard";
import { ListProductCard } from "./components/ListProductCard";

import { useDashboard } from "./hook";

const productDefault = { name: "", stockQuantity: "1", unitPrice: "0,00" };

export const Dashboard = () => {
  const {
    products,
    handleCreateProduct,
    handleChangeOrder,
    handleChangeQuantity,
    handleSort,
    handleSearch,
    handleRemoveProduct,
    handleGoToSettins,
  } = useDashboard();

  return (
    <ListProductCard
      products={products}
      onChangeOrder={handleChangeOrder}
      onChangeQuantity={handleChangeQuantity}
      onRemoveItem={handleRemoveProduct}
      header={
        <>
          <Header
            title="Dashboard"
            onSettingsPress={handleGoToSettins}
            withStatusBarSpace={false}
          />
          <Container>
            <InputSearch
              placeholder="Buscar produtos"
              onSearch={handleSearch}
            />
            <CreateProductCard
              productDefault={productDefault}
              onCreateProduct={(product) => handleCreateProduct(product)}
            />
          </Container>
          {products.length > 0 && (
            <ListHeader
              keys={[
                ["ID", "id"],
                ["Nome", "name"],
                ["Valor unitário", "unitPrice"],
                ["Quantidade", "stockQuantity"],
                ["Valor total", "total"],
              ]}
              onSort={handleSort as ListHeaderProps["onSort"]}
            />
          )}
        </>
      }
    />
  );
};
