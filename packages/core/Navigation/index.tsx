import {
  createContext,
  useContext,
  useCallback,
  useState,
  createElement,
  FunctionComponent,
} from "react";
import {
  NavigationContextData,
  NavigationProviderType,
} from "./navigation.types";

const NavigationContext = createContext<NavigationContextData>(
  {} as NavigationContextData
);

export const NavigationProvider = ({
  screens,
  initialScreen,
}: NavigationProviderType) => {
  const [stack, setStack] = useState([
    screens.find((screen) => screen.name === initialScreen),
  ]);

  const navigate = useCallback(
    (routeName: string, params?: Object) => {
      const { ...newScreen } = screens.find(
        (screen) => screen.name === routeName
      );
      if (!newScreen) {
        return;
      }
      if (params) {
        newScreen.params = { ...newScreen.params, ...params };
      }

      setStack((oldStack) => [...oldStack, newScreen]);
    },
    [screens]
  );

  const goBack = useCallback(() => {
    setStack((oldStack) =>
      oldStack.length > 1 ? oldStack.slice(0, -1) : oldStack
    );
  }, []);

  return (
    <NavigationContext.Provider value={{ navigate, goBack }}>
      {!!stack[stack.length - 1]?.component &&
        createElement(
          stack[stack.length - 1]?.component as FunctionComponent<any>,
          stack[stack.length - 1]?.params
        )}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextData => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};
