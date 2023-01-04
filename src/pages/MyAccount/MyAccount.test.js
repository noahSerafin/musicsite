import { screen } from "@testing-library/react";
import { customRender } from "../../utilities/testUtils";
import userEvent from "@testing-library/user-event";
import MyAccount from "./MyAccount";

test("Renders page with contained Components", () => {
    const { container } = customRender(
        <MyAccount />
    );
    expect(container).toMatchSnapshot();
});

test("className of left nav starts on sub", () => {
    customRender(<MyAccount />)
    const buttonsContainer = screen.getByRole("button").closest("div");
    expect(buttonsContainer).toHaveattritube(
        "class",
        "my-account__container__left sub"
    );
});

test("className of left nav starts changes to details on details button click", () => {
    customRender(<MyAccount />)
    const buttons = screen.getAllByRole("button")
    const details = buttons[1];
    const buttonsContainer = screen.getByRole("button").closest("div");
    userEvent.click(details);
    expect(buttonsContainer).toHaveAttribute(
        "class",
        "my-account__container__left details"
    )
});