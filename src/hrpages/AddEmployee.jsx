import { useQuery } from "@tanstack/react-query"
import UseAxios from "../Hooks/UseAxios"
import SectionTitle from "../Shared/SectionTitle"
import EmployeeCard from "../hrcomponents/EmployeeCard"

const AddEmployee = () => {
  const axiosCommon = UseAxios()

  const role = 'employee'
  const { data: users = [], isPending, refetch } = useQuery(
    {
      queryKey: ['users', role],
      queryFn: async () => {
        const res = await axiosCommon(`/employeeList/${role}`)
        return res.data
      }
    }
  )
  // fetch users on employee role

  return (
    <div>
      <SectionTitle heading={'add employee'} />
      {/* render employee cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {
          users.map(item =>
            <EmployeeCard key={item._id} item={item} />
          )
        }
      </div>
    </div>
  )
}

export default AddEmployee