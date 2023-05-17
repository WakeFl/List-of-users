import { useForm } from "react-hook-form"
import useAPI from "../../requests/useAPI"

const UserAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { fetchData, isLoading, error } = useAPI();

    const handleFormSubmit = (data) => {
        console.log(data)
        fetchData('users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }


    return (
        <>
            <h1>Add User Form</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h3>Name</h3>
                <input
                    type="text"
                    name="name"
                    {...register("name", {
                        required: 'Field is empty'
                    })}
                />
                <p>{errors.name?.message}</p>
                <h3>Email</h3>
                <input
                    type="email"
                    name="email"
                    {...register("email", {
                        required: 'Field is empty'
                    })}
                />
                <p>{errors.email?.message}</p>
                <h3>Phone</h3>
                <input
                    type="phone"
                    name="phone"
                    {...register("phone", {
                        required: 'Field is empty'
                    })}
                />
                <p>{errors.phone?.message}</p>
                <button type="submit">{isLoading ? 'Loading...' : 'Submit'}</button>
                {error && <div>{error.message}</div>}
            </form>
        </>
    )

}

export default UserAdd