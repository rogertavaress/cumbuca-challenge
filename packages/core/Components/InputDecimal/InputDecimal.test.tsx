import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { InputDecimal } from ".";

describe("InputDecimal component", () => {
  test("handles value change correctly", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <InputDecimal placeholder="Enter text" onChangeText={onChangeTextMock} />
    );
    const inputElement = getByPlaceholderText("Enter text");

    fireEvent.changeText(inputElement, "123456");

    expect(onChangeTextMock).toHaveBeenCalledWith("1234,56");
  });
});
