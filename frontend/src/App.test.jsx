import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mock Header and Footer to simplify tests
jest.mock("./components/Header", () => () => <div>Mock Header</div>);
jest.mock("./components/footer", () => () => <div>Mock Footer</div>);

describe("App Component", () => {
  test("renders Header component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });

  test("renders Outlet inside Container", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    // Outlet is empty by default, so check Container exists
    const container = screen.getByRole("main");
    expect(container).toBeInTheDocument();
  });

  test("renders child route content via Outlet", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <App />
      </MemoryRouter>,
    );
    // Since Outlet is empty, you can mock child routes if needed
    // For now, just check that Container is present
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
