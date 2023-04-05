import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, {createContext, useContext} from 'react';
import AuthContext from '../context/AuthContext';


function Details(props) {
   
  const img = useContext(AuthContext);
  return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img.avatar} />
                <Card.Body>
                    <Card.Title>{img.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>city: {img.details.city}</ListGroup.Item>
                    <ListGroup.Item>company: {img.details.company}</ListGroup.Item>
                    <ListGroup.Item>position: {img.details.position}</ListGroup.Item>
                </ListGroup>
      
            </Card>
  );
}

export default Details;

