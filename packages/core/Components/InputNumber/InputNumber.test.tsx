import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { InputNumber } from ".";

import { TEST_IDS } from "./constants";

describe("InputNumber component", () => {
  test("handles increment button press correctly", () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <InputNumber title="Test Input" onChangeText={onChangeTextMock} />
    );
    const incrementButton = getByTestId(TEST_IDS.INCREMENT_BUTTON);

    fireEvent.press(incrementButton);

    expect(onChangeTextMock).toHaveBeenCalledWith("1");
  });

  test("handles decrement button press correctly", () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <InputNumber title="Test Input" onChangeText={onChangeTextMock} />
    );
    const decrementButton = getByTestId(TEST_IDS.DECREMENT_BUTTON);

    fireEvent.press(decrementButton);

    expect(onChangeTextMock).toHaveBeenCalledWith("-1");
  });
});
