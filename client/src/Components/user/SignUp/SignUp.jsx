import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './SignUp.css'

function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    })
    const [error, setError] = useState('')
    const { name, email, mobile, password } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
   /*Signup validation */
        if (formData.name === '' || formData.email === '' || formData.mobile === '' || formData.password === '') {
            setError('Please fill the form')
        } else if ((formData.name.length <= 2 && formData.name.length > 20) || (!formData.name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))) {
            setError('Invalid name')
        } else if ((formData.email.indexOf('@') <= 0) || ((formData.email.charAt(formData.email.length - 4) !== '.') && (formData.email.charAt(formData.email.length - 3) !== '.'))) {
            setError('invalid email format')
        } else if ((formData.mobile.length < 10 || formData.mobile.length > 10) && (!formData.mobile.match(/^[0-9]{10}$/))) {
            setError('Enter valid mobile number')
        } else if (formData.password.length < 6 || formData.password.length > 15) {
            setError('Password length should be between 6 and 15')
        } else {
            let data = await axios.post('http://localhost:5000/signup', formData)
            if (data.status === 201) {
                navigate('/login')
            } else {
                setError('Email or mobile number already exist')
            }
        }
    }


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
                                    <Form className='rounded' onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Full name</Form.Label>
                                            <Form.Control type="text" name='name' onChange={handleChange} value={name} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control type="email" name='email' onChange={handleChange} value={email} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="number" name='mobile' onChange={handleChange} value={mobile} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name='password' onChange={handleChange} value={password} />
                                        </Form.Group>
                                        {error && <p style={{ color: 'red' }} className='error-form'>{error}</p>}

                                        <div className="d-grid gap-2">
                                            <Button className='btn mb-2' variant="primary" type="submit" size="md">
                                                Sign up
                                            </Button>
                                        </div >
                                        <Form.Group className='text-center'>

                                            <Form.Label style={{ cursor: 'pointer' }} onClick={()=>navigate('/login')} >Already have account?</Form.Label>
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

export default SignUp
