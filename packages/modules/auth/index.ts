import { MainModuleType } from "@core/Types/module.types";

import { Loading } from "./Loading";
import { Login } from "./Login";
import { Register } from "./Register";

import { AuthScreenNames } from "./auth.constants";

export const AuthModule: MainModuleType = {
  screens: [
    {
      component: Login,
      name: AuthScreenNames.LOGIN,
    },
    {
      component: Register,
      name: AuthScreenNames.REGISTER,
    },
    {
      component: Loading,
      name: AuthScreenNames.LOADING,
    },
  ],
  initialScreen: AuthScreenNames.LOADING,
};
