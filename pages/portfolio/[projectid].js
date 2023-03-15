import { useRouter } from 'next/router'

function ProtfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname) // generic path
    console.log(router.query)   // path with dynamic segment

    // send a backend server to get data based on the query dynamic ID.

    return (
        <div>
            <h1>
                The Portfolio Project Page
            </h1>
        </div>
    )
}

export default ProtfolioProjectPage