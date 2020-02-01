import React from "react";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import Datepicker from "../Datepicker/Datepicker";

export default function NavBar () {
    return (
        <>
            <Nav activeKey="/home" className="d-flex align-items-center mt-3 ml-4">
                <Nav.Item>
                    <h5 className="mr-3">Período: </h5>
                </Nav.Item>
                <Nav.Item>
                    <Datepicker />
                </Nav.Item>
                
                    <Form inline className="ml-auto mr-3">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
            </Nav>
        </>
    );
}
