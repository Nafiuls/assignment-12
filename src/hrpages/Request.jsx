import UseRequest from "../Hooks/UseRequest"
import SectionTitle from "../Shared/SectionTitle"
import RequestCard from "../hrcomponents/RequestCard"

const Request = () => {
  const [requests] = UseRequest()
  console.log(requests)
  return (
    <div>
      <SectionTitle heading={'requested assets'} />
      {/* map the requests and render cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {
          requests.map(item =>
            <RequestCard key={item._id} item={item}></RequestCard>
          )
        }
      </div>
    </div>
  )
}

export default Request