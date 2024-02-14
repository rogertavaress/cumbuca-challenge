// Import necessary dependencies for testing
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Button } from ".";

describe("Button component", () => {
  test("renders button with correct title", () => {
    const { getByText } = render(<Button title="Test Button" />);
    const buttonElement = getByText("Test Button");
    expect(buttonElement).toBeTruthy();
  });

  test("handles press event", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={onPressMock} />
    );
    const buttonElement = getByText("Test Button");

    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });
});
