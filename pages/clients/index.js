import Link from "next/link"

function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
    { id: "bruce", name: "bruce" },
  ]
  return (
    <div>
      <h1>The Client's Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={{
                pathname: '/clients/[id]',
                query: {id: client.id},
              }}>{client.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ClientPage
