import getUsers from "../../../../services/getUsers";

const UserDetails = async (props) => {
    const users = await getUsers()
    // console.log(props.params.userDetails)
    const currentId = props.params.userDetails;
    const userDetails = users[currentId - 1]
    // console.log(userDetails)
    return (
        <div>
            <h4>User Details</h4>
            <h4>{userDetails?.firstName} - {userDetails?.lastName}</h4>
        </div>
    )
}

export default UserDetails

export async function generateStaticParams() {
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user => ({ userDetails: user.id.toString() }))
}