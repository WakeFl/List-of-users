import { useForm } from "react-hook-form"
import useAPI from "../../requests/useAPI"

const PostAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { fetchData, isLoading, error } = useAPI();

    const handleFormSubmit = (data) => {
        console.log(data)
        fetchData('posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    return (
        <>
            <h1>Add Post Form</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h3>Title</h3>
                <textarea
                    type="text"
                    name="title"
                    {...register("title", {
                        required: 'Field is empty'
                    })} />
                <p>{errors.title?.message}</p>
                <h3>Text</h3>
                <textarea
                    type="text"
                    name="body"
                    {...register("body", {
                        required: 'Field is empty'
                    })} />
                <p>{errors.body?.message}</p>
                <button type="submit">{isLoading ? '...Loading' : 'Submit'}</button>
                {error && <div>{error.message}</div>}
            </form>
        </>
    )

}

export default PostAdd