import React from "react";
import { render } from "@testing-library/react-native";

import { InputText } from ".";

describe("InputText component", () => {
  test("renders input with correct title", () => {
    const { getByText } = render(<InputText title="Test Input" />);
    const inputElement = getByText("Test Input");
    expect(inputElement).toBeTruthy();
  });

  test("renders error message when errorMessage is present", () => {
    const { getByText } = render(
      <InputText title="Test Input" errorMessage="Invalid input" />
    );
    const errorElement = getByText("Invalid input");
    expect(errorElement).toBeTruthy();
  });

  test("does not render error message initially", () => {
    const { queryByText } = render(
      <InputText title="Test Input" errorMessage="Invalid input" />
    );
    const errorElement = queryByText("Invalid input");
    expect(errorElement.props.style[1].opacity).toBe(0);
  });
});
