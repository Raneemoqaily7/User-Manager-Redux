import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect, useDispatch } from 'react-redux';
import {getUserDetail} from "../../redux/Action"

function SearchBar(props) {
    const [searchQuery,setSearchQuery] =useState("")
    const dispatch=useDispatch()

    const handleSearchChange =(e)=>{
        setSearchQuery(e.target.value)
        console.log(searchQuery,"searchquey1111")
       
    }
    const handleSearch = ()=> {
        console.log(searchQuery,"ssssseeeeerrrs")
        dispatch(getUserDetail(searchQuery))

        

    }
    return (
        <Container className="">
            <Row>
                <Col sm={12}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-6 rounded-pill"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <Button className="rounded-pill btn-sm" onClick={handleSearch} variant="outline-dark">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,

    }
}
export default connect(mapStateToProps) (SearchBar);