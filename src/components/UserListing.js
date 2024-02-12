import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import {fetchUserList ,removeUser} from "../redux/Action"
import UserSpinner from './Spinner';
import CustomPagination from './Pagination';
import "./Pagination/pagination.css"
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

function UserListing(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // State to track the total number of pages
  const itemsPerPage = 10; // Number of items per page
  


    useEffect(() =>{
        props.loadUser()
        
    },[])

    const handleDelete=(ids)=>{
    //   const selectedItems=getSelctedIds()
      console.log(ids ,"iii")
      props.removeuser()
      props.user.loading?<UserSpinner/>:
      setTimeout(()=>{
        props.loadUser()
      
        toast.success("User Removed Successfully!!")
      },3000)
      

    }
    useEffect(() => {
        if (props.user.userlist.length > 0) {
          // Calculate the total number of pages based on the number of items and items per page
          setTotalPages(Math.ceil(props.user.userlist.length / itemsPerPage));
        }
      }, [props.user.userlist]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        // You can add logic here to fetch data for the selected page
      };

      

    return (
        props.user.loading?<UserSpinner/>:
        props.user.errMessage?<div><h2>{props.user.errMessage}</h2></div>:
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                      
                        <th>#</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date Of Birth</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                {props.user.userlist.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item =>
                         <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.username}</td>
                         <td>{item.email}</td>
                         <td>{item.phone}</td>
                         <td>{item.Date_Of_Birth}</td>
                         <td><Button variant="outline-danger" onClick={() => handleDelete([item.id])}>DELETE</Button>{' '}</td>
                       </tr>
                       
                       )
                       }
                       
       
       
      </tbody>

            </Table>
            <div  className='pagination-container'>
            <CustomPagination 
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
            </div>
            



        </div>

    );
}

const mapStateToProps =(state)=>{
    return{
        user:state.user
    }
}


const mapDispatchToUser = (dispatch) =>{
   
    return {
        
         loadUser :()=>dispatch(fetchUserList()),
         removeuser:(ids)=>dispatch(removeUser(ids))
    }

}
export default connect(mapStateToProps , mapDispatchToUser) (UserListing);


