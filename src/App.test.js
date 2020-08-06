import React from "react";
import renderer from "react-test-renderer";
import App, { Search, Button, Table } from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Search", () => {
  it("renders without crashing", () => {
    const div = document.createElement(div);
    ReactDOM.render(<Search>Search</Search>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Search>Search</Search>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement(div);
    ReactDOM.render(<Button>More</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Button>More</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Table", () => {
  const data = [
    { Name: "Thor: Ragnarok", Type: "movie" },
    { Name: "Star Wars: The Last Jedi", Type: "movie" },
    { Name: "Spider-Man: Homecoming", Type: "movie" },
  ];

  it("renders without crashing", () => {
    const div = document.createElement(div);
    ReactDOM.render(<Table data={data} />, div);
  });

  test("it has a valid snapshot", () => {
    const component = renderer.create(<Table data={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
