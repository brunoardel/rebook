import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./compoments/NavBar";
import Nav from './compoments/Nav/Nav';
import Body from './compoments/Body/Body'
import Sidebar from "./compoments/Sidebar/Sidebar";
import "../src/App.css";

function App () {
    return (
        <>
            <Container-lg className="main-wrapper">
                <NavBar />
                <Nav />
                <Body>
                    <Container className="section left col-xs-3">
                        <Sidebar />
                    </Container>
                    <Container className="section right col-xs-9">
                        
                    </Container>
                </Body>
            </Container-lg>
        </>
    );
}

export default App;
