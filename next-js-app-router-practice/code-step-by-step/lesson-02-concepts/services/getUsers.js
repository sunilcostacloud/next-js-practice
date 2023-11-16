import axios from "axios"

const getUsers = async () => {
    const { data } = await axios.get("https://dummyjson.com/users")
    return data.users
}

export default getUsers