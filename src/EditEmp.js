import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditEmp() {
    const [id, setId] = useState("")
    const [name, setEmpName] = useState("")
    const [age, setEmpAge] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const { empid } = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json()
        }).then((resp) => {
            setId(resp.id)
            setEmpName(resp.name)
            setEmpAge(resp.age)
            setPhone(resp.phone)
            setEmail(resp.email)
            console.log(resp.id)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const empData = { id, name, age, phone, email }
        fetch(`http://localhost:8000/employee/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((res) => {
            alert('Data Update Successfully')
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div className='container' >
            <div className='row'>
                <div className='col-md-6 '>
                    <h3>Edit Employee</h3>
                    <form onSubmit={handleSubmit}>
                        <label class="form-label">Id</label>
                        <input type="text" className='form-control' value={id} disabled />
                        <label class="form-label">Name</label>
                        <input type="text" className='form-control' value={name} onChange={e => setEmpName(e.target.value)} />
                        <label class="form-label">Age</label>
                        <input type="text" className='form-control' value={age} onChange={e => setEmpAge(e.target.value)} />
                        <label class="form-label">Phone</label>
                        <input type="text" className='form-control' value={phone} onChange={e => setPhone(e.target.value)} />
                        <label class="form-label">Email</label>
                        <input type="text" className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                        <button type='submit' className='btn btn-success mt-2'>Update</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default EditEmp