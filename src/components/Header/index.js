import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="user">Users</Nav.Link>
                        <Nav.Link href="user">Users</Nav.Link>
                       
                    </Nav>
                    
                </Container>
                
            </Navbar>
            <div style={{ marginBottom: '20px'  }}></div>
            
        </>
    );
}

export default Header;