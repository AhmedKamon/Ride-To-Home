import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Transports = (props) => {
    console.log(props.transport)
    const {name, image, price, id} = props.transport;
    return (
        <div className='col-md-3 col-sm-12  '>
            <div className='transports'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <h1>{price} $</h1>
                    </Card.Text>
                    <Link to={`/destination/${id}`} ><Button variant="primary">Book Now</Button></Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Transports;