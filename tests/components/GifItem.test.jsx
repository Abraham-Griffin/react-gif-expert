import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Evaluar <GifItem /> component", () => {
  const title = "Goku";
  const url = "http://goku.com";
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
