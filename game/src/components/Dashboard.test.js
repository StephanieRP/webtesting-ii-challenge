import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import Display from "./Display";

describe("<Dashboard />", () => {
  it("renders the Display component", () => {
    render(<Display />);
  });
  describe("Strike button", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const strike = getByTestId("strike-button");
    const strikeCount = getByTestId("strikeCount");

    it("increment strikes", () => {
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/strike count: 1/i);
      fireEvent.click(strike);
      expect(strikeCount).toHaveTextContent(/strike count: 2/i);
    });
  });
});
