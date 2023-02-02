import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EmployeList() {

    let navigate = useNavigate()
    const [empData, setEmpData] = useState(null)
    const [searchVal, setSearchVal] = useState([])
    const [filterVal, setFilterVal] = useState('')
    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json()
        }).then((resp) => {
            console.log(resp)
            setEmpData(resp)
            setSearchVal(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    const deleteEmp = (id) => {
        fetch(`http://localhost:8000/employee/${id}`, {
            method: "DELETE",
        }).then((res) => {
            alert("Data Delete Successfully")
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
    const loadEdit = (id) => {
        navigate("/emp/edit/" + id)
    }
    const gotoAdd = () => {
        navigate('/createEmp')
    }
    const viewDetail = (id) => {
        navigate("/emp/detail/" + id)
    }

    const handleInput = (e) => {
        if (e.target.value == "") {
            setEmpData(searchVal)
            console.log(searchVal, "afsdgfgsf")
        }
        else {
            const filterResult = searchVal.filter(item => item.name.toLowerCase()
                .includes(e.target.value.toLowerCase()))
            setEmpData(filterResult)
        }
        setFilterVal(e.target.value)
    }
    return (
        <>

            <div className='container'>
                <h3 style={{ textAlign: "center" }}>Employe List</h3>
                <button className='btn btn-primary' onClick={gotoAdd}>Add More +</button>
                <div className='row'>
                    <div className='col-md-3 mt-2'>
                        <input type='text' class='form-control' value={filterVal} onInput={(e) => handleInput(e)} placeholder='Search' />
                    </div>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">age</th>
                            <th scope="col">phone</th>
                            <th scope="col">email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData &&
                            empData.map(item => (
                                < tr key={item.id} >
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td ><button className='btn btn-danger' onClick={() => deleteEmp(item.id)}>Delete</button>
                                        <button className=' btn btn-success ms-2' onClick={() => loadEdit(item.id)}>Edit</button>
                                        <button className=' btn btn-success ms-2' onClick={() => viewDetail(item.id)}>View</button></td>

                                </tr>
                            ))

                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeList