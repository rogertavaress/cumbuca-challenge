import { UserEntity } from "../entities/user.entity";
import { StorageKeysEnum, getItem, setItem } from "../storage.provider";

export const addUser = async (
  newUser: Omit<UserEntity, "id" | "lastLogin">
) => {
  const user = { ...newUser } as UserEntity;
  user.id = 1;
  user.lastLogin = new Date();
  return setItem(StorageKeysEnum.USER, user);
};

export const verifyUser = async (
  user: Omit<UserEntity, "id" | "lastLogin">
) => {
  const userStored = await getItem<UserEntity>(StorageKeysEnum.USER);
  if (
    userStored?.username === user.username &&
    userStored.password === user.password
  ) {
    return true;
  }
  return false;
};

export const getUser = async (): Promise<UserEntity | null> =>
  getItem<UserEntity>(StorageKeysEnum.USER);
