import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { InputSearch } from ".";
import { TEST_IDS } from "./constants";

describe("InputSearch component", () => {
  test("handles search button press correctly", () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<InputSearch onSearch={onSearchMock} />);
    const searchButton = getByTestId(TEST_IDS.SEARCH_BUTTON);

    fireEvent.press(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith("");
  });

  test("handles text input and search button press correctly", () => {
    const onSearchMock = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <InputSearch placeholder="Enter text" onSearch={onSearchMock} />
    );
    const searchButton = getByTestId(TEST_IDS.SEARCH_BUTTON);
    const inputElement = getByPlaceholderText("Enter text");

    fireEvent.changeText(inputElement, "Test Input");

    fireEvent.press(searchButton);

    expect(onSearchMock).toHaveBeenCalledWith("Test Input");
  });
});
