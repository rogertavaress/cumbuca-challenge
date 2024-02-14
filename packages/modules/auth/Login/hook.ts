import { useState } from "react";

import {
  getUser,
  verifyUser,
} from "@core/Storage/repositories/user.repository";
import { biometry, useBiometry } from "@core/Libs/Biometry";
import { useNavigation } from "@core/Navigation";
import { useForm } from "@core/Libs/Form";
import { validateCPF } from "@core/Libs/Form/validations/cpf";
import { validateRegex } from "@core/Libs/Form/validations/regex";

import { ProductScreenNames } from "@modules/product/product.constants";
import { Alert } from "react-native";

export const useLogin = () => {
  const { isBiometryEnabled } = useBiometry();

  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const { form, updateForm, errorMessages, isValid } = useForm({
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

  const handleLogin = async () => {
    setLoading(true);
    const authenticated = await verifyUser(form);
    setLoading(false);
    if (authenticated) {
      navigate(ProductScreenNames.DASHBOARD);
    } else {
      Alert.alert(
        "Usuário não encontrado",
        "Tente novamente com um CPF e/ou senha diferente!"
      );
    }
  };

  const handleBiometry = async () => {
    setLoading(true);
    const [user, authenticated] = await Promise.all([getUser(), biometry()]);
    setLoading(false);
    if (!!user && authenticated) {
      navigate(ProductScreenNames.DASHBOARD);
    }
  };
  return {
    updateForm,
    form,
    errorMessages,
    isValid,
    loading,
    handleLogin,
    isBiometryEnabled,
    handleBiometry,
  };
};
