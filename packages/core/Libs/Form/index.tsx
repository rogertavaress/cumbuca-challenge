import { useCallback, useMemo, useState } from "react";

import { FormHookType } from "./Form.types";

export const useForm = <FormType extends Object>({
  defaultForm,
  validation,
  formLabels,
}: FormHookType<FormType>) => {
  const [form, setForm] = useState(defaultForm);

  const updateForm = useCallback((newForm: Partial<FormType>) => {
    setForm((oldForm) => ({ ...oldForm, ...newForm }));
  }, []);

  const { errorMessages, isValid } = useMemo(() => {
    const errorMessages = Object.entries(form).reduce((prev, [key, value]) => {
      const currentValidation = validation[key as keyof FormType];

      if (
        typeof currentValidation === "function" &&
        !currentValidation(value)
      ) {
        const formLabel = formLabels?.[key as keyof FormType];
        return {
          ...prev,
          [key]: !!formLabel
            ? `Encontramos um erro no campo ${
                formLabels[key as keyof FormType]
              }`
            : "Encontramos um erro",
        };
      }
      return { ...prev };
    }, {}) as { [key in keyof FormType]: string };

    const isValid = Object.keys(errorMessages).length === 0;

    return { isValid, errorMessages };
  }, [form]);

  return {
    form,
    updateForm,
    errorMessages,
    isValid,
  };
};
