import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { act } from "react-dom/test-utils";

/* Components */
import { Input } from ".";

describe("Globals Components - Input", () => {
  it("Should match snapshot", () => {
    const component = render(<Input placeholder="Render Input" />);
    expect(component).toMatchSnapshot();
  });

  it("Should be able to see the input placeholder on screen", () => {
    const { getByTestId } = render(
      <Input placeholder="Render Input" data-testid="input" />
    );
    expect(getByTestId("input")).toBeInTheDocument();
  });

  it("Should be able to change input value on screen", () => {
    const { getByTestId } = render(
      <Input placeholder="Render Input" data-testid="input" />
    );

    const components = getByTestId("input");

    act(() => {
      fireEvent.change(components, { target: { value: "Testing Input" } });
    });

    expect(components).toHaveValue("Testing Input");
  });
});
