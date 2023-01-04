import { customRender } from "../../utilities/testUtils"
import Home from "./Home";

test("Renders page with contained Components", () => {
    const { container } = customRender(
        <Home />
    );
    expect(container).toMatchSnapshot();
});