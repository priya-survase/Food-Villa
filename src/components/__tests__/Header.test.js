import { render } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Logo should load when header is rendered", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
});

test("Online Status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  const OnlineBar = header.getAllByTestId("onlineStatus");
  expect(OnlineBar[0].innerHTML).toBe("<p>You are Online!</p>");
});

test("Cart should have 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart -0");
});
