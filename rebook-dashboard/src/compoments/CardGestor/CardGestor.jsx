import React from 'react';
import { Card, Image } from 'react-bootstrap';
import '../CardGestor/CardGestor.css'

export default function CardGestor () {
    return (
        <Card className="text-center">
            <Card.Body>
                <Image src="https://scontent.fcgh11-1.fna.fbcdn.net/v/t1.0-9/p720x720/49351406_10157115355901617_7251731479598727168_o.jpg?_nc_cat=103&_nc_ohc=sQJHWPpDLlYAX-iwYHZ&_nc_ht=scontent.fcgh11-1.fna&_nc_tp=6&oh=badc8176485e5968625fcd2fde433642&oe=5EC4A113" width="130px" height="130px" roundedCircle />
                <Card.Title className="mt-2">Gestor(a): <span className="font-weight-normal">Bruno Ardel</span></Card.Title>
            </Card.Body>
        </Card>
    )
}