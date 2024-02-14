import { useState } from "react";

import { useNavigation } from "@core/Navigation";
import { useForm } from "@core/Libs/Form";
import { validateCPF } from "@core/Libs/Form/validations/cpf";
import { validateRegex } from "@core/Libs/Form/validations/regex";
import { StorageResponseEnum } from "@core/Storage/storage.provider";
import { addUser } from "@core/Storage/repositories/user.repository";

import { ProductScreenNames } from "@modules/product/product.constants";

export const useRegister = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const { form, updateForm, isValid, errorMessages } = useForm({
    defaultForm: {
      username: "",
      password: "",
    },
    validation: {
      username: validateCPF,
      password: validateRegex(/^.{8,}$/),
    },
    formLabels: {
      username: "CPF",
      password: "senha",
    },
  });

  const handleRegister = async () => {
    setLoading(true);
    const status = await addUser(form);
    setLoading(false);
    if (status === StorageResponseEnum.OK) {
      navigate(ProductScreenNames.DASHBOARD);
    }
  };

  return { updateForm, form, errorMessages, isValid, loading, handleRegister };
};
