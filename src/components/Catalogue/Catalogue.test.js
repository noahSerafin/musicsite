import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../utilities/testUtils";
import MusicDashboard from "./MusicDashboard"

test("Renders component withc child Components", () => {
    const { container } = customRender(
        <MusicDashboard />
    );
    expect(container).toMatchSnapshot();
});