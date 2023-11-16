import Link from "next/link";
import getUsers from "../../../services/getUsers"

const StaticSideGeneration = async () => {
    const users = await getUsers();
    return (
        <div>
            <h1>Static Side Generation</h1>
            {users?.map((item) => (
                <div key={item.id}>
                    <Link href={`/static-side-generation/${item.id}`}>{item.firstName}</Link>
                </div>
            ))}
        </div>
    )
}

export default StaticSideGeneration