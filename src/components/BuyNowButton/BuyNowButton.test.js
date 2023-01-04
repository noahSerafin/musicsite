import { screen } from "@testing-library/react";
import BuyNowButton from "./BuyNowButton";
import { customRender } from "../../utilities/testUtils";

//if logged out
test("button reads log in to purchase when user is logged out", () => {
  customRender(<BuyNowButton />);
  const button = screen.getAllByRole("button");
  expect(button).innerHTMl("Log in to purchase");
});

//when logged in should read purchase