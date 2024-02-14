import { useEffect, useRef, useState } from "react";
import { Alert, TextInput } from "react-native";

import { useForm } from "@core/Libs/Form";
import { validateRegex } from "@core/Libs/Form/validations/regex";
import { StorageResponseEnum } from "@core/Storage/storage.provider";

import { CreateProductCardProps } from "./types";

export const useCreateProductCard = ({
  productDefault: defaultForm,
  onCreateProduct,
}: CreateProductCardProps) => {
  const totalInputRef = useRef<TextInput>(null);
  const [open, setOpen] = useState(true);
  const { form, errorMessages, isValid, updateForm } = useForm({
    defaultForm,
    validation: {
      name: validateRegex(/^.+$/),
      stockQuantity: validateRegex(/^\d+$/),
      unitPrice: (unitPrice) => Number(unitPrice.replace(",", ".")) > 0,
    },
    formLabels: {
      name: "nome",
      stockQuantity: "quantidade em estoque",
      unitPrice: "valor unitário",
    },
  });

  const getTotal = (stockQuantity: string, unitPrice: string): string => {
    const stockQuantityNumber =
      parseFloat(stockQuantity.replace(",", ".")) || 0;
    const unitPriceNumber = parseFloat(unitPrice.replace(",", ".")) || 0;

    const result = stockQuantityNumber * unitPriceNumber;

    const resultString = result
      .toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replaceAll(".", "");

    return resultString;
  };

  const handleCreateProduct = async () => {
    const storageResponse: StorageResponseEnum = await onCreateProduct?.({
      name: form.name,
      stockQuantity: Number(form.stockQuantity),
      unitPrice: Number(form.unitPrice.replace(",", ".")),
    });
    if (storageResponse === StorageResponseEnum.OK) {
      setOpen(false);
      updateForm(defaultForm);
    } else {
      Alert.alert("Tivemos uma falha", "Tente novamente mais tarde!");
    }
  };

  useEffect(() => {
    totalInputRef.current?.setNativeProps({
      text: getTotal(form.stockQuantity, form.unitPrice),
    });
  }, [form]);

  return {
    errorMessages,
    isValid,
    updateForm,
    form,
    open,
    setOpen,
    totalInputRef,
    handleCreateProduct,
  };
};
