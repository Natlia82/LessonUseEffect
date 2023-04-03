import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect, useRef} from "react";
import Details from './Details';

function List() {
    const [fio, setFio] = useState([]);
    const [url, setUrl] = useState("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
    const [img, setImg] = useState({});
    const [id, setId] = useState(0);
    const [loading, setLoading] = useState(false);
    const timestampRef =useRef();

    useEffect(() => {
        
        const cont = async() => {
            const timestap = Date.now();
            timestampRef.current = timestap;
            setLoading(false);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const rez = await response.json();
                if (timestampRef.current === timestap) {
                    if (url == "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json") {
                       setFio(rez);
                
                    } else {
                        setImg(rez);
                        setLoading(true);
                    }
                    
                }
              //  setError(e);
            
        } catch(e) {
            console.log(e);
        } finally {
            
        }
           
        }
        cont();
        return setImg({});
    } , [url, id]);
   
   

    const fioClick = evt => {
        const kod = evt.target.getAttribute('id');
      
        if (id != kod) {
            setUrl("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/"+kod+".json");
            setId(kod);
        }
        
    };


    return (
      <div className='countener'>  
        <div className='list'>  
            <ListGroup>
                {fio.map(o => <ListGroup.Item onClick={(evt) => fioClick(evt)} key={o.id} id={o.id}>{o.name}</ListGroup.Item>)}
            </ListGroup>
        </div>
        {loading? 
        <div className='list'>
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
            
        </div>: <div>Идет загрузка..</div> }
      </div>
     
        
       
    )

}

export default List;