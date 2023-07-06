import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

/* Components */
import { Container } from ".";

describe("Globals Components - Container", () => {
  it("Should match snapshot", () => {
    const component = render(
      <Container>
        <p>Render Container Child</p>
      </Container>
    );
    expect(component).toMatchSnapshot();
  });

  it("Should be able to see the Container content on screen", () => {
    const { getByText } = render(
      <Container>
        <p>Render Container Child</p>
      </Container>
    );
    expect(getByText("Render Alert")).toBeInTheDocument();
  });
});
