import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Header } from ".";

import { TEST_IDS } from "./constants";

describe("Header component", () => {
  test("renders title correctly", () => {
    const { getByText } = render(<Header title="Test Header" />);
    const titleElement = getByText("Test Header");
    expect(titleElement).toBeTruthy();
  });

  test("calls onBackPress when back button is pressed", () => {
    const onBackPressMock = jest.fn();
    const { getByTestId } = render(
      <Header title="Test Header" onBackPress={onBackPressMock} />
    );
    const backButton = getByTestId(TEST_IDS.BACK_BUTTON);
    fireEvent.press(backButton);
    expect(onBackPressMock).toHaveBeenCalled();
  });

  test("calls onSettingsPress when settings button is pressed", () => {
    const onSettingsPressMock = jest.fn();
    const { getByTestId } = render(
      <Header title="Test Header" onSettingsPress={onSettingsPressMock} />
    );
    const settingsButton = getByTestId(TEST_IDS.SETTINGS_BUTTON);
    fireEvent.press(settingsButton);
    expect(onSettingsPressMock).toHaveBeenCalled();
  });

  test("does not render back button if onBackPress is not provided", () => {
    const { queryByTestId } = render(<Header title="Test Header" />);
    const backButton = queryByTestId(TEST_IDS.BACK_BUTTON);
    expect(backButton).toBeNull();
  });

  test("does not render settings button if onSettingsPress is not provided", () => {
    const { queryByTestId } = render(<Header title="Test Header" />);
    const settingsButton = queryByTestId(TEST_IDS.SETTINGS_BUTTON);
    expect(settingsButton).toBeNull();
  });
});
