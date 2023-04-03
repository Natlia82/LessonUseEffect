import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react";
import Details from './Details';

function List() {
    const [fio, setFio] = useState([]);
    const [url, setUrl] = useState("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
    const [img, setImg] = useState({});
    const [id, setId] = useState(0);

    useEffect(() => {
        
        const cont = async() => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const rez = await response.json();
            if (url == "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json") {
                setFio(rez);
                
            } else {
             //  console.log(url);
                setImg(rez);
              //  console.log(rez);
               // console.log(img);
            }
            
           
        }
        cont();
        return setImg({});
    } , [url, id]);
   
    console.log(img);
    /*if (id > 0) {
       console.log(img.details.city);
    }*/

    const fioClick = evt => {
        const kod = evt.target.getAttribute('id');
        console.log(kod);
       // console.log(img.details.city);
        setUrl("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/"+kod+".json");
        setId(kod);
    };


    return (
      <div className='countener'>  
        <div className='list'>  
            <ListGroup>
                {fio.map(o => <ListGroup.Item onClick={(evt) => fioClick(evt)} key={o.id} id={o.id}>{o.name}</ListGroup.Item>)}
            </ListGroup>
        </div>
        <div className='list'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img.avatar} />
                <Card.Body>
                    <Card.Title>{img.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {/*img.details? <ListGroup.Item>city: {img.details.city}</ListGroup.Item>:""*/}
                </ListGroup>
      
            </Card>
            
        </div>
      </div>
     
        
       
    )

}

export default List;