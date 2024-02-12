import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { fetchUserList, removeUser, selectItem, unSelectedItems ,hideUserModal,showUserModal} from "../redux/Action"
import UserSpinner from './Spinner';
import CustomPagination from './Pagination';
import "./Pagination/pagination.css"
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import DeleteButton from "./DeleteButton"
import AddUser from "./AddUser"




function UserListing(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // State to track the total number of pages
    const itemsPerPage = 10; // Number of items per page
    
    
    
    useEffect(() => {
        props.loadUser()
        
    }, [])
    useEffect(() => {
        if (props.user.userlist.length > 0) {
            // Calculate the total number of pages based on the number of items and items per page
            setTotalPages(Math.ceil(props.user.userlist.length / itemsPerPage));
        }
    }, [props.user.userlist]);
    const toggleSelection = (id) => {
        if (props.user.selectedIds.includes(id)) {

            props.deselectItemm(id);
        } else {
            console.log(props.user.selectedIds, "sss")
            props.selectItemm(id);
        }
    };
   





    const onPageChange = (page) => {
        setCurrentPage(page);
        // You can add logic here to fetch data for the selected page
    };



    return (
        props.user.loading ? <UserSpinner /> :
            props.user.errMessage ? <div><h2>{props.user.errMessage}</h2></div> :
               <>
                    <div className="d-flex mb-3 ">
                        <div className="mx-4">
                        
                        <Button variant="outline-success" onClick={props.showuserModal}>Add User</Button>
 {/* Add User modal */}
 <Modal show={props.user.isModalVisible} onHide={props.hideuserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <AddUser />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideuserModal}>
            Close
          </Button>
          {/* Additional buttons or actions */}
        </Modal.Footer>
      </Modal>


                        </div>
                        <div  className="mx-4">  <DeleteButton/> </div>
                        
                        <div></div> 
                    </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>DOB</th>

                            </tr>
                        </thead>

                        <tbody>
                            {props.user.userlist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item =>
                                <tr key={item.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={props.user.selectedIds && props.user.selectedIds.includes(item.id)}
                                            onChange={() => toggleSelection(item.id)} // Call toggleSelection on change
                                        /></td>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.Date_Of_Birth}</td>
                                   
                                </tr>

                            )
                            }





                        </tbody>

                    </Table>
                    <div className='pagination-container'>
                        <CustomPagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>




               </>

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
        selectItemm: (id) => dispatch(selectItem(id)),
        deselectItemm: (id) => dispatch(unSelectedItems(id)),
        showuserModal:()=>dispatch(showUserModal()),
        hideuserModal:()=>dispatch(hideUserModal())


    }

}
export default connect(mapStateToProps, mapDispatchToUser)(UserListing);


