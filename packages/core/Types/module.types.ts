import { NavigationProviderType } from "../Navigation/navigation.types";

export type ModuleType = {} & Omit<NavigationProviderType, "initialScreen">;

export type MainModuleType = {} & NavigationProviderType;
