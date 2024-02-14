import { device, expect, element, by } from "detox";

describe("Register screen", () => {
  beforeAll(async () => {
    await device.launchApp({ delete: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have return error when input CPF wrong", async () => {
    await element(by.id("register/input_user")).typeText("999.999.999-99");

    await element(by.text("Cadastro")).tap();

    await expect(
      element(by.text("Encontramos um erro no campo CPF"))
    ).toBeVisible();
  });

  it("should have return error when input password wrong", async () => {
    await element(by.id("register/input_pass")).typeText("1234567");

    await element(by.text("Cadastro")).tap();

    await expect(
      element(by.text("Encontramos um erro no campo senha"))
    ).toBeVisible();
  });

  it("should successfully complete the registration process", async () => {
    await element(by.id("register/input_user")).typeText("672.408.145-99");
    await element(by.id("register/input_pass")).typeText("12345678");

    await element(by.text("Cadastrar")).tap();

    await expect(element(by.text("Cadastro"))).not.toBeVisible();
  });
});
