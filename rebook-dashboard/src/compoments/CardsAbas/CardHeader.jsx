import React from 'react';
import { Card } from 'react-bootstrap';

export default function CardHeader () {
    return (
        <Card className="text-center">
            <Card.Header>
                <Card.Title className="mt-2">Carteira</Card.Title>
            </Card.Header>
        </Card>
    )
}