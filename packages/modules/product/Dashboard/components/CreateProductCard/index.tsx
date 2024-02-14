import React from "react";

import { Card } from "@core/Components/base/Card";
import { InputText } from "@core/Components/base/InputText";
import { Button } from "@core/Components/base/Button";
import { InputNumber } from "@core/Components/InputNumber";
import { InputDecimal } from "@core/Components/InputDecimal";

import { CreateProductCardProps } from "./types";
import { useCreateProductCard } from "./hook";
import { TEST_IDS } from "./constants";

export const CreateProductCard = ({
  productDefault: defaultForm,
  onCreateProduct,
}: CreateProductCardProps) => {
  const {
    form,
    errorMessages,
    isValid,
    updateForm,
    open,
    setOpen,
    handleCreateProduct,
    totalInputRef,
  } = useCreateProductCard({
    productDefault: defaultForm,
    onCreateProduct,
  });
  return (
    <Card>
      {open && (
        <>
          <InputText
            defaultValue={defaultForm.name}
            errorMessage={errorMessages.name}
            keyboardType="name-phone-pad"
            onChangeText={(name) => updateForm({ name })}
            placeholder="Bolsa"
            title="Nome:"
            testID={TEST_IDS.INPUT_NAME}
            value={form.name}
          />
          <InputNumber
            defaultValue={defaultForm.stockQuantity}
            errorMessage={errorMessages.stockQuantity}
            minValue={1}
            onChangeText={(stockQuantity) => updateForm({ stockQuantity })}
            title="Quantidade em estoque:"
            testID={TEST_IDS.INPUT_QNT}
            value={form.stockQuantity}
          />
          <InputDecimal
            defaultValue={defaultForm.unitPrice}
            errorMessage={errorMessages.unitPrice}
            leftText="R$"
            onChangeText={(unitPrice) => updateForm({ unitPrice })}
            placeholder={defaultForm.unitPrice}
            title="Valor unitário:"
            testID={TEST_IDS.INPUT_UNIT}
            value={form.unitPrice}
          />
          <InputText
            defaultValue={defaultForm.unitPrice}
            editable={false}
            inputRef={totalInputRef}
            leftText="R$"
            title="Valor total:"
            testID={TEST_IDS.INPUT_TOTAL}
          />
          <Button
            title="Adicionar"
            disabled={!isValid}
            onPress={handleCreateProduct}
          />
        </>
      )}
      <Button
        title={open ? "Fechar" : "Adicionar um novo produto"}
        onPress={() => setOpen((oldOpen) => !oldOpen)}
      />
    </Card>
  );
};
