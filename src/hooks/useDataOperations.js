import { useState } from 'react'
import axios from 'axios'

export const useDataOperations = () => {
    const [response, setResponse] = useState(null)
    const apiCall = async (url, method = 'get', dataObj = null, paramsObj = null) => {

        const config = {
            method,
            url
        }

        if(paramsObj) config.params = paramsObj
        if(dataObj) config.data = dataObj

        try{
            setResponse( prevResponse => prevResponse = axios(config))
        }catch(err){
            response.error = err
        }
    }

    return [ response, apiCall ]
}