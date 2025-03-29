import { Button } from "@/components/ui/button";
import { useTodoStore } from "@/store/useTodoStore";

export const Filters = () => {
    const { setFilter, clearCompleted, filter } = useTodoStore();

    return (
        <div className="flex align-center">
            <div className="space-x-2">
                <Button
                    variant="outline"
                    onClick={() => setFilter("all")}
                    className={`${
                        filter === "all" ? "bg-gray-300" : ""
                    } hover:bg-gray-400`}
                >
                    Все
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setFilter("active")}
                    className={`${
                        filter === "active" ? "bg-gray-300" : ""
                    } hover:bg-gray-400`}
                >
                    Активные
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setFilter("completed")}
                    className={`${
                        filter === "completed" ? "bg-gray-300" : ""
                    } hover:bg-gray-400`}
                >
                    Выполненные
                </Button>
            </div>
            <Button
                variant="outline"
                className="ml-2  hover:bg-gray-400"
                onClick={clearCompleted}
            >
                Очистить выполненные
            </Button>
        </div>
    );
};
