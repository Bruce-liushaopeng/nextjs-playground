import { useRouter } from "next/router"
function ClientProjectsPage() {
  const router = useRouter()
  const name = router.query.id

  function loadProjectHandler() {
    // load data ...
    // then we nevigate away
    //router.push('/clients/max/projecta') // just like link, but imperatively (programmatically)
    router.replace({
        pathname: '/clients/[id]/[clientprojectid]',
        query: {
            id: 'max',
            clientprojectid: 'projecta'
        }
        
    })
  }
  
  return (
    <div>
      <h1>The Project of a Given Client {name}</h1>
      <button onClick={loadProjectHandler}>Load Project A </button>
    </div>
  )
}
export default ClientProjectsPage
