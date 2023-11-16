"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const StudentList = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Sunil"
        },
        {
            id: 2,
            name: "Pavan"
        },
        {
            id: 3,
            name: "Harish"
        },
        {
            id: 4,
            name: "Mahesh"
        }
    ])
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {data?.map(item => (
                    <li key={item?.id}>
                        <Link href={`dynamicroutes/${String(item?.id)}`}>{item?.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentList