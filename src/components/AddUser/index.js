import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addNewUser, fetchUserList ,hideUserModal} from '../../redux/Action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function AddUser(props) {
  const dispatch = useDispatch()
  const navigate=useNavigate()
 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    Date_Of_Birth: ""


  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value



    }));
    console.log(value, "value")

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewUser(formData))
    dispatch(hideUserModal())
    setTimeout(() => {
      
      dispatch(fetchUserList())


      toast.success("User Added Successfully!!")
  }, 3000)
    

    navigate("/user")

  }
  console.log(formData, "formData")

  return (
    <Form   onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>  User Name </Form.Label>
        <Form.Control type="text" name="username" placeholder="Enter Username" onChange={handleChange} />
        <Form.Text className="text-muted">
          Enter a Uniqe User Name Please!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>  Phone </Form.Label>
        <Form.Control type="text" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select your gender</Form.Label>
        <Form.Select aria-label="Gender select" name="gender" value={formData.gender} onChange={handleChange}>
          <option>Gender</option>
          <option value="FEMALE">Female</option>
          <option value="MALE">Male</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormDate">
        <Form.Label> Date Of Birth</Form.Label>
        <Form.Control type="date" name="Date_Of_Birth" placeholder="pick a date" value={formData.Date_Of_Birth} onChange={handleChange} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddUser;