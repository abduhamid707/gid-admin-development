import axios from "axios"
import router from "../router"
import store from "@/store"
import {
    getToken
} from "@/constants/utils/storage"

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_ENV_VARIABLE || "https://culturevolunteers.uz/api/admin/",
    // baseURL: "http://192.168.10.16:2007/api/v1/",
    withCredentials: true,
    credentials: "include",
    timeout: 60000,
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["Accept"] = 'application/json'
        config.headers["Content-Type"] = 'application/json'
        config.headers["Access-Control-Allow-Origin"] = '*'
        config.headers["Access-Control-Allow-Methods"] = 'OPTIONS'
        config.headers["Access-Control-Allow-Headers"] = 'Content-Type, Authorization'
        config.headers["Access-Control-Allow-Credentials"] = true
        const storageToken = getToken()
        config.headers["authorization"] = storageToken ?
            `${storageToken}` :
            ""

        return config
    },

    (error) => {
        return Promise.resolve(error)
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        // if (isDev) {
        //     console.log("this is dev")
        // }
        return response || {}
    },
    async function (error) {
        const statusCode = (error.response || {}).status || -1

        if ((statusCode == 401)||(statusCode == 403)||(statusCode == -1)) {
            delete axiosInstance.defaults.headers.common["Authorization"]
            // store.dispatch("auth/logout").then(() => 
                router.push({
                    name: "login"
                })
            // )
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)
export default axiosInstance