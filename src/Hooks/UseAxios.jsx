import axios from "axios"

const axiosCommon = axios.create({
  baseURL: 'http://localhost:5000'
})
const UseAxios = () => {
  return axiosCommon
}

export default UseAxios