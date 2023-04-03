import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';


function Details(props) {
    const {detals} = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={detals.avatar} />
      <Card.Body>
        <Card.Title>{detals.name}</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
       
      </ListGroup>
      
    </Card>
  );
}

export default Details;

/* <ListGroup.Item>city: {detals.details.city}</ListGroup.Item>
        <ListGroup.Item>company: {detals.details.company}</ListGroup.Item>
        <ListGroup.Item>position: {detals.details.position}</ListGroup.Item>*/