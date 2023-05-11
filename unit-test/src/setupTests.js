import Hello from "./Hello";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import World from "./World";
import Posts from "./Posts";

describe("Hello Component", () => {
  test('should render "Hello world" as a test result', () => {
    render(<Hello />);
    const outputElement = screen.getByText("Hello world", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});

describe("World Component", () => {
  test('should render "Some Paragraph" if the button is not clicked', () => {
    render(<World />);
    const outputElement = screen.getByText("Some Paragraph", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('should render "Changed" if the button is  clicked', () => {
    render(<World />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});

describe('Post Component', () => {
  test('should render if request successful', async() => {
      // jest.mock(axios)
      // axios.get.mockResolvedValueOnce(data)

      window.fetch = jest.fn()
      window.fetch.mockResolvedValueOnce({
          json: async() => [{ id: 1, title: 'title 1' }]
      })

      render(<Posts />)

      const listItemElements = await screen.findAllByRole('listitem');
      expect(listItemElements).not.toHaveLength(0)
  })
})
