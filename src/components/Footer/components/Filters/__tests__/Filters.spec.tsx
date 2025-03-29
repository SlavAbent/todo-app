import { fireEvent, render, screen } from "@testing-library/react";

import { Filters } from "../Filters";
import { create } from "zustand";

const useTodoStore = create((set) => ({
    filter: "all",
    setFilter: jest.fn(),
    clearCompleted: jest.fn(),
}));

describe("Filters Component", () => {
  let setFilterMock: jest.Mock;
  let clearCompletedMock: jest.Mock;

  beforeEach(() => {
    setFilterMock = jest.fn();
    clearCompletedMock = jest.fn();

    useTodoStore.setState({
        setFilter: setFilterMock,
        clearCompleted: clearCompletedMock,
        filter: "all",
    });
  });

  test("renders all filter buttons and clear button", () => {
    render(<Filters />);

    expect(screen.getByText("Все")).toBeInTheDocument();
    expect(screen.getByText("Активные")).toBeInTheDocument();
    expect(screen.getByText("Выполненные")).toBeInTheDocument();
    expect(screen.getByText("Очистить выполненные")).toBeInTheDocument();
  });

  test("calls setFilter when a filter button is clicked", () => {
    render(<Filters />);

    fireEvent.click(screen.getByText("Активные"));
    expect(setFilterMock).toHaveBeenCalledWith("active");

    fireEvent.click(screen.getByText("Выполненные"));
    expect(setFilterMock).toHaveBeenCalledWith("completed");
  });

  test("calls clearCompleted when clear button is clicked", () => {
    render(<Filters />);

    fireEvent.click(screen.getByText("Очистить выполненные"));
    expect(clearCompletedMock).toHaveBeenCalled();
  });

  test("applies correct styles for active filter", () => {
    useTodoStore.setState({ filter: "active" });
    
    render(<Filters />);
    const activeButton = screen.getByText("Активные");
    expect(activeButton).toHaveClass("bg-gray-300");
  });
});