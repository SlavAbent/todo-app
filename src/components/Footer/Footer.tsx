import Filters from "./components/Filters"
import ItemsLeft from "./components/ItemsLeft"

export const Footer = () => {
    return (
        <div className="flex align-center justify-between align-center">
            <ItemsLeft />
            <Filters />
        </div>
    )
}