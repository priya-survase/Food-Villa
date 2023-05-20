import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Restaurant should load on Home Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  // expect(shimmer).toBeInTheDocument();
  expect(resList.children.length).toBe(15);

  //   console.log(shimmer);
});

test("Search for string(roll) on Home Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  fireEvent.change(input, { target: { value: "roll" } });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  //expect(body.innerHTML).toBe(10);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2);
  console.log(searchBtn);
});
