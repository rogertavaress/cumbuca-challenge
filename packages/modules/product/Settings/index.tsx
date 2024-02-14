import React from "react";
import { View } from "react-native";

import { Header } from "@core/Components/Header";
import { Container } from "@core/Components/base/Container";
import { useStyles } from "@core/Theme";

import { ChangeSettings } from "./components/ChangeSettings";

import { useSettings } from "./hook";
import { componentStyles } from "./styles";

export const Settings = () => {
  const { styles } = useStyles(componentStyles);
  const { settings, handleChangeItem, handleGoBack } = useSettings();

  return (
    <View style={styles.container}>
      <ChangeSettings
        onChangeItem={handleChangeItem}
        settings={settings}
        header={
          <>
            <Header
              title="Configuração"
              onBackPress={handleGoBack}
              withStatusBarSpace={false}
            />
            <Container />
          </>
        }
      />
    </View>
  );
};
