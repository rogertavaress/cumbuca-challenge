import { device, expect, element, by } from "detox";

describe("Login screen", () => {
  const goToLogin = async () => {
    await element(by.id("register/input_user")).typeText("672.408.145-99");
    await element(by.id("register/input_pass")).typeText("12345678");

    await element(by.text("Cadastrar")).tap();
    await device.reloadReactNative();
  };

  beforeAll(async () => {
    await device.launchApp({ delete: true });
    await goToLogin();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have return error when input CPF wrong", async () => {
    await element(by.id("login/input_user")).typeText("999.999.999-99");

    await element(by.text("Login")).tap();

    await expect(
      element(by.text("Encontramos um erro no campo CPF"))
    ).toBeVisible();
  });

  it("should have return error when input password wrong", async () => {
    await element(by.id("login/input_pass")).typeText("1234567");

    await element(by.text("Login")).tap();

    await expect(
      element(by.text("Encontramos um erro no campo senha"))
    ).toBeVisible();
  });

  it("should successfully complete the login process", async () => {
    const WRONG_PASS = "123456789";
    const RIGHT_PASS = "12345678";
    await element(by.id("login/input_user")).typeText("672.408.145-99");
    await element(by.id("login/input_pass")).typeText(WRONG_PASS);

    await element(by.text("Entrar")).tap();

    await expect(element(by.text("Login"))).toBeVisible();

    await element(by.id("login/input_pass")).clearText();
    await element(by.id("login/input_pass")).typeText(RIGHT_PASS);

    await element(by.text("Entrar")).tap();

    await expect(element(by.text("Login"))).not.toBeVisible();
  });
});
