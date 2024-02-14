import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthModule } from "@modules/auth";
import { ProductModule } from "@modules/product";

import { StatusBar } from "./Components/StatusBar";
import { NavigationProvider } from "./Navigation";

import "./Config";

export const Main = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      <TouchableWithoutFeedback
        onPressIn={() => Keyboard.dismiss()}
        style={{ flexGrow: 1 }}
        accessible={false}
      >
        <NavigationProvider
          screens={[...AuthModule.screens, ...ProductModule.screens]}
          initialScreen={AuthModule.initialScreen}
        />
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};
