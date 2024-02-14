import { ModuleType } from "@core/Types/module.types";

import { Dashboard } from "./Dashboard";
import { Settings } from "./Settings";

import { ProductScreenNames } from "./product.constants";

export const ProductModule: ModuleType = {
  screens: [
    {
      component: Dashboard,
      name: ProductScreenNames.DASHBOARD,
    },
    {
      component: Settings,
      name: ProductScreenNames.SETTINGS,
    },
  ],
};
