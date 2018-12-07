import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Component from "src/";

describe("Component", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays default message when passed no props", () => {
    render(<Component />, node, () => {
      expect(node.innerHTML).toContain("Hello World!");
    });
  });

  it("displays custom message when passed message on props", () => {
    render(<Component message="Custom message" />, node, () => {
      expect(node.innerHTML).toContain("Custom messag");
    });
  });
});
