import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './SignUp.css'

function SignUp() {
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
                                    <Form >
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Full name</Form.Label>
                                            <Form.Control type="text"  name='name' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control type="email"  name='email' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="number"  name='mobile' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"  name='password' />
                                        </Form.Group>
                                        {/* {error && <p style={{color:'red'}} className='error-form'>{error}</p>} */}

                                        <div className="d-grid gap-2">
                                            <Button className='btn mb-2' variant="primary" type="submit" size="md">
                                                Sign up
                                            </Button>
                                        </div >
                                        <Form.Group className='text-center'>

                                            <Form.Label style={{ cursor: 'pointer' }}  >Already have account?</Form.Label>
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
