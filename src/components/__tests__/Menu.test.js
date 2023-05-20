import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { fireEvent, waitFor } from "@testing-library/react";
import { MENU_DATA } from "../mocks/menudata";
import RestaurantMenu from "../RestaurantMenu";
import HeaderComponent from "../HeaderComponent";
import { render } from "@testing-library/react";
import store from "../../utils/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("Menu")));
  const Menu = body.getByTestId("Menu");
  const addBtn = body.getAllByTestId("addbtn");

  fireEvent.click(addBtn[0]);
  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart -1");
});
