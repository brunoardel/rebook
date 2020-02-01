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
                <Body />
            </Container-lg>
        </>
    );
}

export default App;
