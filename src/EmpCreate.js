import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EmpCreate() {
    const [id] = useState("")
    const [name, setEmpName] = useState("")
    const [age, setEmpAge] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const empData = { name, age, phone, email }
        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((res) => {
            alert('Data Saved Successfully')
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <>
            <div className='container' >
                <div className='row'>
                    <div className='col-md-6 '>
                        <h3>Add Employee</h3>
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
                            <button type='submit' className='btn btn-success mt-2'>Submit</button>
                        </form>
                    </div>
                </div>


            </div>
        </>

    )
}

export default EmpCreate