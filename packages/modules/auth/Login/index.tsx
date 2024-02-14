import React from "react";
import { View } from "react-native";

import { InputText } from "@core/Components/base/InputText";
import { Header } from "@core/Components/Header";
import { Button } from "@core/Components/base/Button";
import { Container } from "@core/Components/base/Container";
import { useStyles } from "@core/Theme";

import { componentStyles } from "./styles";
import { useLogin } from "./hook";
import { TEST_IDS } from "./constants";
import { ScrollViewContainer } from "@core/Components/base/ScrollViewContainer";

export const Login = () => {
  const { styles } = useStyles(componentStyles);
  const {
    updateForm,
    form,
    errorMessages,
    isValid,
    loading,
    handleLogin,
    isBiometryEnabled,
    handleBiometry,
  } = useLogin();

  return (
    <ScrollViewContainer style={styles.container}>
      <Header title="Login" />
      <Container>
        <InputText
          title="CPF"
          onChangeText={(username) => updateForm({ username })}
          defaultValue={form.username}
          errorMessage={errorMessages.username}
          keyboardType="number-pad"
          testID={TEST_IDS.INPUT_USER}
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
          title="Entrar"
          disabled={!isValid || loading}
          onPress={handleLogin}
        />
        {isBiometryEnabled && (
          <Button
            title="Entrar com Biometria"
            onPress={handleBiometry}
            disabled={loading}
          />
        )}
      </Container>
    </ScrollViewContainer>
  );
};
