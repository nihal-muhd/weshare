import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './AdminLogin.css'

function AdminLogin() {
  return (
    <React.Fragment>
            <div className='signpage'>
                <div className='container '>
                    <div className='row d-flex justify-content-center '>
                        <div className='col-6 mt-5'>
                            <div>
                                <h2 className='head text-center '>WeShare</h2>
                                <h4 className='text-center '>Admin Panel</h4>
                            </div>
                            <div className='adminmain'>
                                <div className='form-part'>
                                    <Form >
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username </Form.Label>
                                            <Form.Control type="email" placeholder="Enter username" name='username' />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name='password' />
                                        </Form.Group>
                                        {/* {error && <p style={{color:'red'}} className='error-form'>{error}</p>} */}

                                        <div className="d-grid gap-2">
                                            <Button className='btn mb-2' variant="secondary" type="submit" size="md">
                                                Log in
                                            </Button>
                                        </div >
                                    

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

export default AdminLogin
