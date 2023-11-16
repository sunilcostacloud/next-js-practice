"use client"

const StudentDetails = ({ params }) => {
    // console.log("params", params)
    return (
        <div>
            <h1>StudentDetails</h1>
            <h2>ID: {params?.student}</h2>
        </div>
    )
}

export default StudentDetails