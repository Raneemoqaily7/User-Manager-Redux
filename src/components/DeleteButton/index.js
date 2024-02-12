import React from "react";
import { connect } from 'react-redux';
import UserSpinner from "../Spinner"
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import {fetchUserList ,removeUser  } from "../../redux/Action"
function DeleteButton(props) {
    const handleDelete = () => {
        if (window.confirm("Do you want to remove ?"))
        {props.removeuser(props.user.selectedIds)
            props.user.loading ? <UserSpinner /> :
                setTimeout(() => {
                    props.loadUser()
    
    
                    toast.success("User Removed Successfully!!")
                }, 3000)}
       
        
       
    };

    return (
        <Button onClick={handleDelete} variant="outline-danger">Delete</Button>
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
        removeuser: (ids) => dispatch(removeUser(ids)),
        // selectItemm: (id) => dispatch(selectItem(id)),
        // deselectItemm: (id) => dispatch(unSelectedItems(id)),


    }
}

export default connect (mapStateToProps ,mapDispatchToUser)(DeleteButton)
