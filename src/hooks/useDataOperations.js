import axios from 'axios'
import { endPoints } from '../config/apiEndpoints'

export const useDataOperations = () => {

    const getData = (body, endpointName) => {
        const endpoint = endPoints[endpointName]
        axios.get()
    }
    const postData = (body, endpointName) => {
        const endpoint = endPoints[endpointName]
        axios.post()
    }

    const deleteData = (body, endpointName) => {
        const endpoint = endPoints[endpointName]
        axios.delete()
    }

    return [ getData, postData, deleteData ]
}