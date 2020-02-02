import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Grafico from '../../assets/img/Grafico.jpg'

export default function CardGrafico () {
    return (
        <Card className="text-center border-0">
            <Card.Body>
                <Image src={Grafico} height="105" width="auto" />
            </Card.Body>
        </Card>
    )
}