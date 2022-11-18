import { useState, useEffect } from 'react'

export  function useApi(url) {
const [datas, setData] = useState()

useEffect(() => {

    if (!url) return
    async function fetchData() {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    }
    
    fetchData()
    
    }, [url])

return datas

}
