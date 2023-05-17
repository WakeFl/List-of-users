import { Link } from "react-router-dom"
import useAPI from "../../requests/useAPI";
import { useEffect } from "react";


const PostsList = () => {
    const { fetchData, isLoading, error, data } = useAPI();

    useEffect(() => {
        fetchData('posts', { method: 'GET' })
    }, [])

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <>
            <h1 className="headling">Posts</h1>
            <Link className="addLink" to='add'>Add Post</Link>
            <hr />
            {isLoading
                ? <h3>Loading...</h3>
                : data && data.map(item => (
                    <Link className="listLink" to={`${item.id}`} key={item.id}>
                        {item.title}
                    </Link>
                )
                )
            }
        </>
    )
}


export default PostsList