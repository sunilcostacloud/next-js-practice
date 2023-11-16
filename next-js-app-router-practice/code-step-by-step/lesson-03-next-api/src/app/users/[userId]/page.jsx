import axios from "axios";

const getUserDetails = async (id) => {
    let { data } = await axios.get(`http://localhost:3000/api/users/${id}`);
    return data.result[0]
}

const UserDetails = async ({ params }) => {
    // console.log(params.userId)
    const data = await getUserDetails(params.userId)

    return (
        <div>
            <h1>User Details</h1>
            <h2>{data?.name}</h2>
        </div>
    )
}

export default UserDetails