import { NativeModules } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron from "reactotron-react-native";

declare global {
  interface Console {
    tron: typeof reactotron;
  }
}

const host = NativeModules.SourceCode.scriptURL.split("://")[1].split(":")[0];
const name = "Cumbuca";

export const reactotron = Reactotron.configure({
  host,
  name,
})
  .useReactNative({
    editor: false,
    overlay: false,
  })
  .setAsyncStorageHandler?.(AsyncStorage)
  .connect();

console.tron = reactotron;
