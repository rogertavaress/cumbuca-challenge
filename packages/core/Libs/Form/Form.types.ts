export type FormHookType<FormType> = {
  defaultForm: FormType;
  validation: { [key in keyof FormType]: FormValidationType };
  formLabels?: { [key in keyof FormType]: string };
};

export type FormValidationType = (value: any) => boolean;
