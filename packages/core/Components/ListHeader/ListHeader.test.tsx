import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { ListHeader } from ".";

const keys = [
  ["Key1", "key1"],
  ["Key2", "key2"],
  ["Key3", "key3"],
] as [string, string][];

describe("ListHeader component", () => {
  test("renders correctly with keys", () => {
    const onSortMock = jest.fn();
    const { getByText } = render(
      <ListHeader keys={keys} onSort={onSortMock} />
    );

    keys.forEach(([label, key]) => {
      const buttonElement = getByText(label);
      expect(buttonElement).toBeTruthy();
    });
  });

  test("calls onSort with the correct key when button is pressed", () => {
    const onSortMock = jest.fn();
    const { getByText } = render(
      <ListHeader keys={keys} onSort={onSortMock} />
    );

    keys.forEach(([label, key]) => {
      const buttonElement = getByText(label);
      fireEvent.press(buttonElement);

      expect(onSortMock).toHaveBeenCalledWith(key);
    });
  });
});
