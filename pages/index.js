import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1> The Home Page</h1>
            <ul>
                <li>
                    <Link replace href="/portfolio"> Portfolio </Link>
                </li>
                <li>
                    <Link href='clients'> Client </Link>
                </li>
                <li>
                    <a href="/portfolio"> Portfolio with 'a' </a>
                </li>

            </ul>
        </div>
    )
}

export default HomePage