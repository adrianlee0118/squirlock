import React from "react";
import renderer from "react-test-renderer";
import App, { Search } from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const compoent = renderer.create(<App />);
    const tree = compoent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
