/**
 * Fetch data from the Api
 * @param { String } url
 * @return { Object }
 */

import { useState, useEffect } from 'react'

export  function useApi(url) {
const [datas, setData] = useState({})
const [isLoading, setLoading] = useState(true)
const [error, setError] = useState(false)

useEffect(() => {

    if (!url) return
    async function fetchData() {   
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        } catch(err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
            }
    }

    fetchData()
    
    }, [url])

return {datas, isLoading, error}

}
