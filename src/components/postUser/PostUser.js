import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './postUser.css'
import { useNavigate } from 'react-router-dom';


const PostUser = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });


  /* after posting the user we need user to navigate to dashboard */
  const navigate= useNavigate();

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      /* transform response into json */
      const data=await response.json(response)
      console.log(data)
      navigate("/")

    } catch (error) {
      console.error(error.message)
    }

    /*console.log("name", formData.name);
    console.log("email", formData.email);
    console.log("phone", formData.phone);*/

  }

  return (
    <>
      <div className="center-form">
        <h1>Post New User</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formbasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button varient="dark" type="submit" className="w-100">
            Post User
          </Button>
        </Form>
      </div>
    </>
  )
}

export default PostUser
