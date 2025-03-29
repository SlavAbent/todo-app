import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTodoStore } from "@/store/useTodoStore";

export const AddTask = () => {
    const { newTask, setNewTask, addTask } = useTodoStore();
    
    return (
        <div className="flex align-center">
            <Input
                placeholder="Что хотите сделать?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
                className="h-11"
            />
            <Button type="button" onClick={() => addTask()} className="ml-4 h-11">Добавить</Button>
        </div>
    )
}