import { TodoStore } from "../types/types";
import { create } from "zustand";

export const useTodoStore = create<TodoStore>((set) => ({
  tasks: [],
  filter: "all",
  newTask: "",
  addTask: () =>
    set((state) => {
      if (!state.newTask.trim()) return state;

      return {
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: state.newTask, completed: false },
        ],
        newTask: "",
      };
    }),
  setNewTask: (text) => set({ newTask: text }),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  clearCompleted: () =>
    set((state) => ({ tasks: state.tasks.filter((task) => !task.completed) })),
  setFilter: (filter) => set({ filter }),
}));
