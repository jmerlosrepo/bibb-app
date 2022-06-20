import axios from 'axios'
import { endPoints } from '../config/apiEndpoints'

export const postData = async (endPointName, body ) => {
    let response = null
    try{
        response =  await axios.post(endPoints[endPointName], body )
    }
    catch(err){
        
    }
    finally{
        return response;
    }
}

export const getData = async (endPointName) => {
    let response = null
    try{
        response = await axios.get(endPoints[endPointName])
    }
    catch(err){}
    finally{
        return response
    }
}