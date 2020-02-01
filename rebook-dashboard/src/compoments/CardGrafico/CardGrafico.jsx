import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Grafico from '../../assets/img/Grafico.jpg'

export default function CardGrafico () {
    return (
        <Card className="text-center">
            <Card.Body>
                <Image src={Grafico} width="350px" />
                <Card.Title className="mt-2">Taxa de Conversão</Card.Title>
            </Card.Body>
        </Card>
    )
}