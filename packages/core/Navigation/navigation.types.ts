import { FunctionComponent } from "react";

export interface NavigationContextData {
  navigate: (routeName: string, params?: Object) => void;
  goBack: () => void;
}

export type ScreenType = {
  component: FunctionComponent<any>;
  name: string;
  params?: Object;
};

export type NavigationProviderType = {
  screens: ScreenType[];
  initialScreen: ScreenType["name"];
};
