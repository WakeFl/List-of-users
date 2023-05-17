import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useAPI from '../../requests/useAPI'
import DeleteButton from '../DeleteButton'
import NotFound from '../NotFound'
import styles from '../Post.module.css'


const Post = () => {
    const { id } = useParams();

    const API__URL = `posts/${id}`

    const { fetchData, isLoading, error, data } = useAPI();

    useEffect(() => {
        fetchData(API__URL, { method: 'GET' })
    }, [])

    if (JSON.stringify(data) === '{}') {
        return <NotFound />
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {isLoading
                ? <h1>Loading...</h1>
                : data && <div className={styles.post}>
                    <h1 className={styles.headlings}>UserId:{data.userId} | Id:{data.id}</h1>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                    <DeleteButton url={API__URL} />
                </div>
            }
        </>
    )

}

export default Post