import { device, expect, element, by } from "detox";

describe("Dashboard screen", () => {
  const goToDashboardFromRegister = async () => {
    await element(by.id("register/input_user")).typeText("672.408.145-99");
    await element(by.id("register/input_pass")).typeText("12345678");

    await element(by.text("Cadastrar")).tap();
  };
  const goToDashboardFromLogin = async () => {
    await element(by.id("login/input_user")).typeText("672.408.145-99");
    await element(by.id("login/input_pass")).typeText("12345678");

    await element(by.text("Entrar")).tap();
  };
  const addProducts = async () => {
    await element(by.id("create_product/input_name")).typeText("Bolsa1");
    await element(by.id("create_product/input_unit")).typeText("52000");
    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.text("Adicionar")).tap();
    await element(by.text("Adicionar um novo produto")).tap();

    await element(by.id("create_product/input_name")).typeText("Bolsa2");
    await element(by.id("create_product/input_unit")).typeText("53000");
    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.text("Adicionar")).tap();
    await element(by.text("Adicionar um novo produto")).tap();

    await element(by.id("create_product/input_name")).typeText("Bolsa3");
    await element(by.id("create_product/input_unit")).typeText("54000");
    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.text("Adicionar")).tap();
  };

  beforeAll(async () => {
    await device.launchApp({ delete: true });
    await goToDashboardFromRegister();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await goToDashboardFromLogin();
  });

  it("should be able add products", async () => {
    await element(by.id("create_product/input_name")).typeText("Camisa");
    await element(by.id("create_product/input_unit")).typeText("8000");

    await expect(element(by.id("create_product/input_unit"))).toHaveValue(
      "80,00"
    );
    await expect(element(by.id("create_product/input_total"))).toHaveValue(
      "80,00"
    );

    await element(by.id("create_product/input_qnt_increment")).tap();
    await element(by.id("create_product/input_qnt_increment")).tap();

    await element(by.text("Adicionar")).tap();

    await expect(element(by.text("Dashboard"))).toBeVisible();
  });

  it("should be able change product order without save", async () => {
    await addProducts();

    await expect(element(by.label(/^Bolsa.*$/)).atIndex(0)).toHaveText(
      "Bolsa1"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(1)).toHaveText(
      "Bolsa2"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(2)).toHaveText(
      "Bolsa3"
    );

    await element(by.text("Bolsa2")).longPressAndDrag(
      2000,
      0,
      0,
      element(by.text("Nome")),
      0,
      0,
      "fast",
      0
    );
    await element(by.text("Bolsa2")).swipe("up", "fast", 0.1);

    await expect(element(by.label(/^Bolsa.*$/)).atIndex(0)).toHaveText(
      "Bolsa2"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(1)).toHaveText(
      "Bolsa1"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(2)).toHaveText(
      "Bolsa3"
    );

    await device.reloadReactNative();
    await goToDashboardFromLogin();

    await element(by.text("Dashboard")).swipe("up", "fast", 1);
    await element(by.text("Fechar")).tap();

    await expect(element(by.label(/^Bolsa.*$/)).atIndex(0)).toHaveText(
      "Bolsa1"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(1)).toHaveText(
      "Bolsa2"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(2)).toHaveText(
      "Bolsa3"
    );
  });

  it("should be able change product sort by field", async () => {
    await element(by.text("Dashboard")).swipe("up", "fast", 1);
    await element(by.text("Fechar")).tap();

    await element(by.label("ID")).tap();

    await expect(element(by.label(/^Bolsa.*$/)).atIndex(0)).toHaveText(
      "Bolsa3"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(1)).toHaveText(
      "Bolsa2"
    );
    await expect(element(by.label(/^Bolsa.*$/)).atIndex(2)).toHaveText(
      "Bolsa1"
    );
  });

  it("should be able search a product", async () => {
    await element(by.id("input_search/input")).typeText("Camisa");

    await element(by.id("input_search/search_button")).tap();

    await element(by.text("Dashboard")).swipe("up", "fast", 1);
    await element(by.text("Fechar")).tap();

    await expect(element(by.label("Bolsa1"))).not.toBeVisible();
  });

  it("should be able remove a product", async () => {
    await element(by.text("Dashboard")).swipe("up", "fast", 1);
    await element(by.text("Fechar")).tap();

    await element(by.id("list_item/remove_button_1")).tap();

    await element(
      by.label("Remover").and(by.type("_UIAlertControllerActionView"))
    ).tap();

    await element(by.text("Adicionar um novo produto")).tap();

    await element(by.id("create_product/input_name")).typeText("Celular");
    await element(by.id("create_product/input_unit")).typeText("100000");
    await element(by.text("Adicionar")).tap();

    await expect(element(by.text("1"))).toBeVisible();
  });

  it("should be able remove a product if the quantity of product are zero", async () => {
    await element(by.text("Dashboard")).swipe("up", "fast", 1);
    await element(by.text("Fechar")).tap();

    await element(by.id("input_number/decrement_button")).atIndex(0).tap();

    await element(
      by.label("Remover").and(by.type("_UIAlertControllerActionView"))
    ).tap();

    await expect(element(by.label("Celular"))).not.toBeVisible();
  });
});
