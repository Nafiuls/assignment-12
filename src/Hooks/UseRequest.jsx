import { useQuery } from "@tanstack/react-query"
import UseAuth from "./UseAuth"
import UseAxios from "./UseAxios"

const UseRequest = () => {
  const { user } = UseAuth()
  const email = user?.email
  const axiosCommon = UseAxios()
  const { data: requests = [], isPending, refetch } = useQuery({
    queryKey: ['requests', user?.email],
    queryFn: async () => {
      const res = await axiosCommon(`/requested/hr/${email}`)
      console.log(res.data)
      return res.data
    }
  })

  return [requests, isPending, refetch]
}

export default UseRequest