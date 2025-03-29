import { Checkbox } from "@/components/ui/checkbox"
import { FC } from "react"
import { TypeTask } from "@/store/types"
import { useTodoStore } from "@/store/useTodoStore"

export const Task:FC<TypeTask> = ({
    id,
    text,
    completed
}) => {
    const { toggleTask } = useTodoStore()
    return  (
        <li key={id} className="flex items-center space-x-2 p-2">
            <Checkbox checked={completed} onCheckedChange={() => toggleTask(id)} />
            <span 
                onClick={() => toggleTask(id)} 
                className={completed ? "line-through text-gray-500" : ""}
            >{text}</span>
        </li>
    )
}