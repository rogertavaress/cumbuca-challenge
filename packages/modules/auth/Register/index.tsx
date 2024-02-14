import React from "react";

import { InputText } from "@core/Components/base/InputText";
import { Header } from "@core/Components/Header";
import { Button } from "@core/Components/base/Button";
import { Container } from "@core/Components/base/Container";
import { useStyles } from "@core/Theme";
import { ScrollViewContainer } from "@core/Components/base/ScrollViewContainer";

import { useRegister } from "./hook";
import { componentStyles } from "./styles";
import { TEST_IDS } from "./constants";

export const Register = () => {
  const { styles } = useStyles(componentStyles);
  const { updateForm, form, errorMessages, isValid, loading, handleRegister } =
    useRegister();

  return (
    <ScrollViewContainer style={styles.container}>
      <Header title="Cadastro" />
      <Container>
        <InputText
          title="CPF"
          onChangeText={(username) => updateForm({ username })}
          defaultValue={form.username}
          errorMessage={errorMessages.username}
          testID={TEST_IDS.INPUT_USER}
          keyboardType="number-pad"
        />
        <InputText
          title="Senha"
          onChangeText={(password) => updateForm({ password })}
          defaultValue={form.password}
          errorMessage={errorMessages.password}
          testID={TEST_IDS.INPUT_PASS}
          secureTextEntry
        />
        <Button
          title="Cadastrar"
          disabled={!isValid || loading}
          onPress={handleRegister}
        />
      </Container>
    </ScrollViewContainer>
  );
};
