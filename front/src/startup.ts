import axios from 'axios'
import {serviceOptions} from "./api/fan/index.defs.ts";

export const apiUrl = 'http://127.0.0.1:5000/'

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  /* other custom settings */
  headers: {},
})


export default function setupAxios() {
  serviceOptions.axios = axiosInstance
}