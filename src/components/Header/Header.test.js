import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../utilities/testUtils";

//if logged out
test("The links are contained in the page", () => {
  customRender(<Header />);
  const links = screen.getAllByRole("link");
  expect(links[0]).toHaveAttribute("href", "/Home");
  expect(links[1]).toHaveAttribute("href", "/my-account");
  expect(links[2]).toHaveAttribute("href", "/login");
  expect(links[3]).toHaveAttribute("href", "/support");
});

//when logged in logout should appear