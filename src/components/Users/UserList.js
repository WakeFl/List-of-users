import useAPI from "../../requests/useAPI";
import { useEffect } from "react";
import { Link } from "react-router-dom"


const UserList = () => {
    const { fetchData, isLoading, error, data } = useAPI();

    useEffect(() => {
        fetchData('users', { method: 'GET' })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1>Users</h1>
            <Link className="addLink" to='add'>Add User</Link>
            <hr />
            {isLoading
                ? <h1>Loading...</h1>
                : data && data.map(data => (
                    <Link className="listLink" to={`${data.id}`} key={data.id}>
                        {data.name}
                    </Link>
                ))
            }
        </>
    )
}

export default UserList