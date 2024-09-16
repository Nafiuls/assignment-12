import { useQuery } from "@tanstack/react-query"
import UseAuth from "../Hooks/UseAuth"
import UseAxios from "../Hooks/UseAxios"

const EmployeeList = () => {
  const { user } = UseAuth()
  const email = user?.email
  const axiosCommon = UseAxios()
  // fetch employees data from API
  const { data: employees = [], isPending, refetch } = useQuery({
    queryKey: ['employees', user?.email],
    queryFn: async () => {
      const res = await axiosCommon(`/employeeList/hr/${email}`)
      return res.data
    }
  })
  if (isPending) return <div>Loading....</div>
  return (
    <div>EmployeeList</div>
  )
}

export default EmployeeList