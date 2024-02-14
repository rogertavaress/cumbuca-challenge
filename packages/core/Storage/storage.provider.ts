import AsyncStorage from "@react-native-async-storage/async-storage";

export enum StorageResponseEnum {
  ERROR = "error",
  OK = "ok",
}

export enum StorageKeysEnum {
  USER = "user",
  PRODUCTS = "products",
  SETTINGS = "settings",
}

export const setItem = async (key: StorageKeysEnum, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return StorageResponseEnum.OK;
  } catch (error) {
    console.warn("[ERROR] setItem", { error });
    return StorageResponseEnum.ERROR;
  }
};

export const getItem = async <T>(key: StorageKeysEnum): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.warn("[ERROR] getItem", { error });
    return null;
  }
};

export const getItems = async (keys: StorageKeysEnum[]) => {
  try {
    const jsonValue = await AsyncStorage.multiGet(keys);
    return jsonValue.map(([_key, item]) =>
      item != null ? JSON.parse(item) : null
    );
  } catch (error) {
    console.warn("[ERROR] getItems", { error });
    return null;
  }
};
