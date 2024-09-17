import { useQuery } from '@tanstack/react-query'
import UseAuth from './UseAuth'
import UseAxios from './UseAxios'

const UseEmployee = () => {
  const { user } = UseAuth()
  const axiosCommon = UseAxios()
  const { data, refetch } = useQuery(
    {
      queryKey: ['data', user?.email],
      queryFn: async () => {
        const res = await axiosCommon(`/employeeInfo/${user?.email}`)
        return res.data

      }
    }
  )
  return [data, refetch]
}

export default UseEmployee