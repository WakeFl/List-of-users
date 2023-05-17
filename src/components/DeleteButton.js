import useAPI from "../requests/useAPI";

const DeleteButton = ({ url }) => {
    const { fetchData, isLoading, error } = useAPI();

    if (isLoading) {
        return <div>Removal...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <button onClick={() => fetchData(url, { method: 'DELETE' })}>
            Delete Data
        </button>
    );
}

export default DeleteButton