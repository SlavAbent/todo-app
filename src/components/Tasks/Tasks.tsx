import AddTask from "./components/AddTask"
import Task from "./components/Task"
import { useTodoStore } from "@/store/useTodoStore"

export const Tasks = () => {
    const { tasks, filter } = useTodoStore()
    const filteredTasks = tasks.filter((task) =>
        filter === "all" ? true : filter === "active" ? !task.completed : task.completed
      );
    return (
        <>
            <AddTask />
            <ul className="mt-4">
                {filteredTasks.length === 0 ? (
                    <li>Задач пока нет! Добавьте свою первую задачу!</li>
                ) : (
                    filteredTasks.map((task) => {
                        const { id, text, completed } = task
                        return (
                            <div key={id}>
                                <Task 
                                    id={id} 
                                    text={text}  
                                    completed={completed}
                                />
                            </div>  
                        )
                    })
                )}
            </ul>
        </>
    )
}