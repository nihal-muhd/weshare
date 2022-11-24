import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './Login.css'

function Login() {
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
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name='email' />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name='password' />
                                        </Form.Group>
                                        {/* {error && <p style={{color:'red'}} className='error-form'>{error}</p>} */}

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
