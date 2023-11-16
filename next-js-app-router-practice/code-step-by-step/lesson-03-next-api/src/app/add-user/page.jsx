"use client"

import axios from "axios";
import { useState } from "react"

const AddUser = () => {

    const initForm = {
        name: "",
        age: null,
        email: ""
    }

    const [formData, setFormData] = useState(initForm);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        async function postData() {
            setLoading(true)
            try {
                let { data } = await axios.post("http://localhost:3000/api/users", formData);
                alert("new user added")
                setData(data.result)
            } catch (err) {
                alert(err.response.data.result)
            } finally {
                setLoading(false)
            }
        }
        postData()
    }

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name</label>
                <input type="text" id="name" name="name" placeholder="enter name" value={formData.name} onChange={handleChange} required />
                <br />
                <label htmlFor="age">Enter Age</label>
                <input type="number" id="age" name="age" placeholder="enter age" value={formData.age} onChange={handleChange} required />
                <br />
                <label htmlFor="email">Enter Email</label>
                <input type="email" id="email" name="email" placeholder="enter email" onChange={handleChange} value={formData.email} required />
                <br />
                <button type="submit" >Submit</button>
            </form>
            <br />
            {loading ? <div>Loading...</div> : <div><h1>{data?.name}</h1> - <h1>{data?.age}</h1> - <h1>{data?.email}</h1></div>}

        </div>
    )
}

export default AddUser