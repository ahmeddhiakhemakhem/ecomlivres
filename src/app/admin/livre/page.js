import ListLivres from '@/components/livresComponents/ListLivres'
import { fetchLivre } from '@/services/livreService'
import React from 'react'

const getLivre = async () => {
    const data = await fetchLivre()
    return data
}

const Livrepage = async () => {
    const livre = await getLivre()
    return (
        <div>
            <ListLivres livre={livre} />
        </div>
    )
}

export default Livrepage
