import { useTodoStore } from "@/store/useTodoStore"

export const ItemsLeft = () => {    
    const { tasks } = useTodoStore()
    return (
        <span>
            {tasks.filter((task) => !task.completed).length} осталось выполнить!
        </span>
    )
}