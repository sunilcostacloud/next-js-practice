import axios from "axios"
import Link from "next/link"

const getUsers = async () => {
    let { data } = await axios.get('http://localhost:3000/api/users');
    return data
}

const Users = async () => {
    const users = await getUsers();
    // console.log(users);
    return (
        <div>
            <h1>User List</h1>
            {users?.map(item => (
                <div key={item.id}>
                    <Link href={`/users/${item.id}`} >{item.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Users