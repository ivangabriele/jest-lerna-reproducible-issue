import React from "react";
import TestRenderer from "react-test-renderer";

import Block from "../Block";

describe("blocks/Block", () => {
  it("should render", () => {
    const $block = TestRenderer.create(<Block />);

    expect($block).toMatchSnapshot();
  });
});
