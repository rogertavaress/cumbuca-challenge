import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { getUser } from "@core/Storage/repositories/user.repository";
import { useNavigation } from "@core/Navigation";
import { useStyles } from "@core/Theme";

import { AuthScreenNames } from "@modules/auth/auth.constants";

import { componentStyles } from "./styles";

export const Loading = () => {
  const { styles, theme } = useStyles(componentStyles);

  const { navigate } = useNavigation();
  const verifyScreen = async () => {
    const hasUser = await getUser();
    if (!!hasUser) {
      navigate(AuthScreenNames.LOGIN);
    } else {
      navigate(AuthScreenNames.REGISTER);
    }
  };

  useEffect(() => {
    verifyScreen();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={theme.COLORS.GRAY_700} />
    </View>
  );
};
