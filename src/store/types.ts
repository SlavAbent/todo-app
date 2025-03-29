export type TypeTask = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoStore = {
  tasks: TypeTask[];
  filter: "all" | "active" | "completed";
  newTask: string;
  addTask: () => void;
  setNewTask: (text: string) => void;
  toggleTask: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
};
