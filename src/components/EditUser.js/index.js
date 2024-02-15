import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { connect, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/Action';
import { fetchUserList,  selectItem, hideUserModal, showUserModal,unSelectedItems } from "../../redux/Action"
function EditUser(props) {
    const dispatch=useDispatch()
    
    const [formData, setFormData] = useState({
       
            
        username: "",
        email: "",
        phone: "",
        gender: "",
        Date_Of_Birth: ""
    
    
      })

      useEffect(() => {
        if (props.user.selectedIds.length === 1) {
            const userId = props.user.selectedIds[0];
            const selectedUser = props.user.userlist.find(user => user.id === userId);
            console.log(selectedUser,"testttt")
            setFormData({
                username: selectedUser.username,
                email: selectedUser.email,
                phone: selectedUser.phone,
                gender: selectedUser.gender,
                Date_Of_Birth: selectedUser.Date_Of_Birth
            })
            
            ;
        }
        
    }, [props.user.selectedIds, props.user.userlist]);
   
      
      const handleChange =(e)=>{
        
        const {name,value}=e.target
        setFormData ({
            ...formData,
            [name]:value,
            
        })
      }
      const handleEdit=()=>{
       
        console.log(props.user.selectedIds,"sellllllllec")
        console.log(props.user.selectedIds.length,"length")
        const updateUserData ={
            id:props.user.selectedIds[0],
           
            ...formData
        }
        props.editSelectedUser(updateUserData)
        console.log(updateUserData ,"raneeeeeeeeeem")
        dispatch(hideUserModal())
        setTimeout(() => {
      
            props.loadUser()
      
      
            toast.success("User Updated Successfully!!")
            props.deselectItemm(updateUserData.id)
        }, 2000)
       
    }
    return (
        
        <Form   onSubmit={handleEdit}>
            
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>  User Name </Form.Label>
        <Form.Control type="text" name="username"  value={formData.username}placeholder="Enter Username" onChange={handleChange} />
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

const mapStateToProps = (state) => {
    return {
        user: state.user,

    }
}


const mapDispatchToUser = (dispatch) => {

    return {

        loadUser: () => dispatch(fetchUserList()),
        
        selectItemm: (id) => dispatch(selectItem(id)),
        deselectItemm: (id) => dispatch(unSelectedItems(id)),
        showuserModal: () => dispatch(showUserModal()),
        hideuserModal: () => dispatch(hideUserModal()),
        editSelectedUser:(userData) =>dispatch(updateUser(userData))


    }

}
export default connect (mapStateToProps,mapDispatchToUser)(EditUser);