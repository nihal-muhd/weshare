import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../redux/userSlice';
import { useCookies } from 'react-cookie'
import './Login.css'

function Login() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [cookies, setCookies] = useCookies([])
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({email: '',password: '' })
    const { user } = useSelector((state) => state.user)
  
    const { email, password } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (formData.email === '' || formData.password === '') {
            setError('Please fill the form')
        } else {
            dispatch(userLogin(formData))
            navigate('/')
        }
    }

    useEffect(()=>{
        if(cookies.jwt || user){
            console.log("hii")
            navigate('/')
        }
    })


    return (
        <React.Fragment>
            <div className='signpage'>
                <div className='container '>
                    <div className='row d-flex justify-content-center '>
                        <div className='col-5 mt-5'>
                            <div>
                                <h2 className='head text-center '>WeShare</h2>
                            </div>
                            <div className='main'>
                                <div className='form-part'>
                                    <Form onSubmit={handleSubmit}>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={email} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={password} />
                                        </Form.Group>
                                        {error && <p style={{ color: 'red' }} className='error-form'>{error}</p>}

                                        <div className="d-grid gap-2">
                                            <Button className='btn mb-2' variant="primary" type="submit" size="md">
                                                Log in
                                            </Button>
                                        </div >
                                        <Form.Group className='text-center'>

                                            <Form.Label style={{ cursor: 'pointer' }} >Don't have an account?</Form.Label>
                                        </Form.Group>

                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
