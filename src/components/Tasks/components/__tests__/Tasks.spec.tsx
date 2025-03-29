import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Tasks from "../../index";

describe("Tasks Component", () => {
  it("displays a message when there are no tasks", () => {
    render(<Tasks />);

    const noTasksMessage = screen.getByText(
      "Задач пока нет! Добавьте свою первую задачу!"
    );
    expect(noTasksMessage).toBeInTheDocument();
  });
});
