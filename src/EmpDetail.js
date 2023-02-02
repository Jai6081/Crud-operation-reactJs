import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
function EmpDetail() {

    const { empid } = useParams()
    const [empDetail, setEmpDetail] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json()
        }).then((resp) => {
            setEmpDetail(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <span><b>Employee Detail</b></span>
                    {empDetail &&
                        <div>
                            <h2>Employee Id: <b>{empDetail.id}</b></h2>
                            <h3>Employee Name: <b>{empDetail.name}</b></h3>
                            <h4>Employee Age: <b>{empDetail.age}</b></h4>
                            <h5>Employee Phone: <b>{empDetail.phone}</b></h5>
                            <h6>Employee Email: <b>{empDetail.email}</b></h6>
                            <Link to="/" className='btn btn-danger'>Back to Listing</Link>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default EmpDetail