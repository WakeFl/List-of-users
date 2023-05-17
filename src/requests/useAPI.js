import { useState } from "react";

const baseURL = 'https://jsonplaceholder.typicode.com/'

function useAPI() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async (url, options) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        await fetch(`${baseURL}${url}`,
            { ...options })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                if (response.status >= 400) {
                    setError('Incorrect');
                }

                if (response.status >= 500) {
                    setError('Something wrong');
                }
            })
            .then(json => setData(json))
            .catch(() => setError('Something wrong'))
            .finally(() => setIsLoading(false))
    }
    return { fetchData, isLoading, error, data }
}

export default useAPI