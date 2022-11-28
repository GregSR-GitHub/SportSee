/**
 * Fetch data from the Api
 * @param { String } url
 * @return { Object.< datas: Object, isLoading: Boolean, error: Boolean>}
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
            // if data is 'can not get user' it's an error
            if(typeof(data) !== 'object'){
                setError(true)
            }
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
