import { useQuery } from "@tanstack/react-query"
import UseAuth from "./UseAuth"
import UseAxios from "./UseAxios"

const UseRole = () => {
  const axiosCommon = UseAxios()
  const { user } = UseAuth()

  const { data: userInfo = {}, isPending, refetch } = useQuery({
    queryKey: ['userInfo', user?.email],
    queryFn: async () => {
      const res = await axiosCommon(`/users/role/${user?.email}`)
      // console.log(res.data)
      return res.data
    }
  }
  )

  return [userInfo, isPending, refetch]
}

export default UseRole