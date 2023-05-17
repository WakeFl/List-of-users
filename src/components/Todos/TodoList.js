import useAPI from "../../requests/useAPI";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import TodoEdit from './TodoEdit'

const TodoList = () => {
    const { fetchData, isLoading, error, data } = useAPI();

    useEffect(() => {
        fetchData('todos', { method: 'GET' })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1 className="headling">Todos</h1>
            <Link className="addLink" to='add'>Add Todo</Link>
            <hr />
            {isLoading
                ? <h1>Loading...</h1>
                : data && data.map(data => (
                    <TodoEdit className="listLink" value={data.title} key={data.id} url={`todos/${data.id}`} completed={data.completed} />
                )
                )
            }
        </>
    )
}

export default TodoList