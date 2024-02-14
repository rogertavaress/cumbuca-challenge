import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { useStyles } from "@core/Theme";

export const StatusBar = () => {
  const { theme } = useStyles();

  return <ExpoStatusBar backgroundColor={theme.COLORS.BLUE_INVERSE} />;
};
