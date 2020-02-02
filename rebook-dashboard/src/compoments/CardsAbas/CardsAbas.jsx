import React from "react";
import { Row, Col } from 'react-bootstrap'

export default function CardsAbas () {
    return (
        <div className="mt-3 justify-content-between">
            <Row className="mx-2">
                <Col>
                    <Sidebar />
                </Col>
                <Col>
                    <NavAbas />
                </Col>
            </Row>
        </div>    
    )
}