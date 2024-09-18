import { useQuery } from "@tanstack/react-query"
import UseEmployee from "../Hooks/UseEmployee"
import UseAxios from "../Hooks/UseAxios"
import SectionTitle from "../Shared/SectionTitle"
import EmCard from "../EmComponents/EmCard"

const RequestAsset = () => {
  const [data] = UseEmployee()
  const axiosCommon = UseAxios()
  const email = data?.HrEmail
  console.log(email)
  // get asset with hrEmail
  const { data: assets = [], isPending, refetch } = useQuery({
    queryKey: ['assets', email],
    queryFn: async () => {
      const res = await axiosCommon(`/employee/asset/${email}`)
      return res.data
    }
  })

  if (isPending) return <div>Loading....</div>


  return (
    <div>
      <SectionTitle heading={'request an asset'} />
      <div className="my-10 gap-4  grid grid-cols-1 sm:grid-cols-3">
        {/* render card to show detailse */}
        {
          assets.map(item =>
            <EmCard key={item._id} item={item}></EmCard>
          )
        }
      </div>
    </div>
  )
}

export default RequestAsset