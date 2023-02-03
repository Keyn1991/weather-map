import axios from "axios"
import {baseUrl, APIKey} from "../components/configs/urls";


const axiosService = city =>  axios.get(`${baseUrl}${city}&appid=${APIKey}`)

export {
    axiosService
}

