import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Evaluar <GifItem /> component", () => {
  const title = "Goku";
  const url = "http://goku.com/";
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    const { scr, alt } = screen.getByRole("img");
    expect(scr).toBe(url);
    expect(alt).toBe(alt);
  });
});
