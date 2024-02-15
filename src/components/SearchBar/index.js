import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';

function SearchBar(props) {
    const [searchQuery,setSearchQuery] =useState()
    // const dispatch=useDispatch()

    const handleSearchChange =(e)=>{
       
    }
    const handleSearch = (searchQuery)=> {
        

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
export default SearchBar;