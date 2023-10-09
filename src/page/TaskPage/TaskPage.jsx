import { useParams } from "react-router"

export const TaskPage = () => {
    const { id } = useParams();
     
    return (
        <div>
            TaskPage
        </div>
    )
}