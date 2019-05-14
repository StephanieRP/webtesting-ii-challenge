import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display />", () => {
  it("shows scores", () => {
    const { getByTestId } = render(<Display />);
    const strike = getByTestId("strikeCount");
    expect(strike).toHaveTextContent(/strike count/i);
    const ball = getByTestId("ballCount");
    expect(ball).toHaveTextContent(/ball count/i);
  });
});
