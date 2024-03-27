import axios from "axios"

import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjM3NThmNDBhODEyZjUxZjhjYjI3OTU5OGZmNWQwZSIsInN1YiI6IjY1ZGYzYzgxYjM5ZTM1MDE4NjMwOThlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kl4CTnGDodVaSMLObtpctKaiMecWDd6_BI3KC4K9H88'
    return request
})

export {apiService}