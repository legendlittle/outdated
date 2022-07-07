
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Nav variant="pills" activeKey="home"
            >
                <Nav.Item>
                    <Nav.Link eventKey="home" href="#/home">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="find" title="Item" href='/find'>
                        Find
                    </Nav.Link>
                </Nav.Item>

            </Nav>


        );
    }
}

export default Home;


