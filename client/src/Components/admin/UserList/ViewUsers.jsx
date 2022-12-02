import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ViewUsers() {
    const navigate = useNavigate()
    const [user, setUser] = useState([])


    useEffect(() => {
        async function getUsers() {
            const userData = await axios.get('http://localhost:5000/admin/getUser', { withCredentials: true })
            if (userData.status === 200) {
                setUser(userData.data.users)
            } else {
                alert("error occured")
            }
        }
        getUsers()
    }, [])

    const blockUser=async(userID)=>{
        console.log(userID);
        const blkUser= await axios.post('http://localhost:5000/admin/blockUser', { userID: userID }, { withCredentials: true })
        console.log(blkUser);

    }

    return (
        <React.Fragment>
            <div className='userTable-main'>
                <div className="usersList">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {user.map((obj, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.email}</td>
                                        <td>{obj.mobile}</td>
                                        <td>{obj.Active?"Active":"Blocked"}</td>
                                        <td><Button variant="danger" onClick={()=>{blockUser(obj._id)}} >Block</Button>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </div>
            </div>

        </React.Fragment>

    )
}

export default ViewUsers
