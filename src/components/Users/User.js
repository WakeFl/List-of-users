import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useAPI from '../../requests/useAPI'
import DeleteButton from '../DeleteButton'
import NotFound from '../NotFound'
import UserTemplate from './UserTemplate'
import styles from '../Post.module.css'
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faTag, faGlobe, faLandmark } from '@fortawesome/free-solid-svg-icons'
import Tabs from '../Tabs/Tabs'

const User = () => {
    const { id } = useParams();
    const [tabsData, setTabsData] = useState(null)

    const API__URL = `users/${id}`

    const { fetchData: fetchDataMain, isLoading: isLoadingMain, error: errorMain, data: dataMain } = useAPI();
    useEffect(() => {
        fetchDataMain(API__URL, { method: 'GET' })
    }, [])


    useEffect(() => {
        (async () => {
            const responses = await Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`),
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`),
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            ]);
            const data = await Promise.all(responses.map(response => response.json()));
            data[0].label = 'Albums'
            data[1].label = 'Posts'
            data[2].label = 'Todos'
            setTabsData(data)
        })()
    }, [])

    if (JSON.stringify(dataMain) === '{}') {
        return <NotFound />
    }

    if (errorMain) {
        return <div>Error: {errorMain.message}</div>;
    }


    return (
        <>
            {isLoadingMain
                ? <h1>Loading...</h1>
                : dataMain && <div className={styles.post}>
                    <h1 className={styles.headlings}>{dataMain.name} | Id:{dataMain.id}</h1>
                    <UserTemplate value={dataMain.username} clue="Username" icon={faUserCircle} />
                    <UserTemplate value={dataMain.email} clue="Email" icon={faEnvelope} />
                    <UserTemplate value={`${dataMain.address.city} ,${dataMain.address.suite} ,${dataMain.address.street}`} clue="Adress" icon={faTag} />
                    <UserTemplate value={dataMain.phone} clue="Phone" icon={faPhone} />
                    <UserTemplate value={dataMain.website} clue="Website" icon={faGlobe} />
                    <UserTemplate value={dataMain.company.name} clue="Company" icon={faLandmark} />
                    <DeleteButton url={API__URL} />
                    {tabsData && <Tabs tabs={tabsData} />}
                </div>
            }
        </>

    )
}

export default User