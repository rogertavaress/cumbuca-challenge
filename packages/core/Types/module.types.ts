import { NavigationProviderType } from "@core/Navigation/types";

export type ModuleType = {} & Omit<NavigationProviderType, "initialScreen">;

export type MainModuleType = {} & NavigationProviderType;
