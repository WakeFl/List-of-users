import { useForm } from "react-hook-form"
import useAPI from "../../requests/useAPI"


const TodoAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { fetchData, isLoading, error } = useAPI();

    const handleFormSubmit = (data) => {
        console.log(data)
        fetchData('todos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return (
        <>
            <h1>Add Todo Form</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h3>Title</h3>
                <textarea
                    type="text"
                    name="title"
                    {...register("title", {
                        required: 'Field is empty'
                    })}
                />
                <p>{errors.title?.message}</p>
                <h3>Completed</h3>
                <select
                    name="body"
                    {...register("body")}>
                    <option value={true}>Done</option>
                    <option value={false}>Not Done</option>
                </select>
                <button type="submit">{isLoading ? 'Loading...' : 'Submit'}</button>
                {error && <div>{error.message}</div>}
            </form>
        </>
    )

}

export default TodoAdd