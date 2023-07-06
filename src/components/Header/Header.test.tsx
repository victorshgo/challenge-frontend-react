import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

/* Components */
import { Header } from ".";

describe("Globals Components - Header", () => {
  it("Should match snapshot", () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
