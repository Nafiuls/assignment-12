import { useQuery } from "@tanstack/react-query"
import UseAuth from "../Hooks/UseAuth"
import UseAxios from "../Hooks/UseAxios"
import EmployeeListCard from "../hrcomponents/EmployeeListCard"
import SectionTitle from "../Shared/SectionTitle"

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
    <div>
      <SectionTitle heading={'employee list'} />
      <div className=" grid gap-2 my-5 grid-cols-1 lg:grid-cols-3">
        {/* render employee list */}
        {employees.map(item =>
          <EmployeeListCard key={item._id} item={item} refetch={refetch}></EmployeeListCard>
        )}
      </div>
    </div>
  )
}

export default EmployeeList