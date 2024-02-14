import React from "react";
import { render } from "@testing-library/react-native";

import { ListItem } from ".";
import { ListItemProps } from "./types";

jest.mock("react-native-draggable-flatlist", () => ({
  ScaleDecorator: jest.requireActual("react-native").View,
}));

describe("ListItem component", () => {
  const mockItem = {
    item: [{ value: "1" }, { value: "Product Name" }],
    drag: jest.fn(),
    getIndex: jest.fn(),
    isActive: false,
    removeItem: jest.fn(),
  } as ListItemProps;

  test("renders correctly", () => {
    const { getByText } = render(<ListItem {...mockItem} />);

    const idElement = getByText("1");
    const nameElement = getByText("Product Name");

    expect(idElement).toBeTruthy();
    expect(nameElement).toBeTruthy();
  });
});
