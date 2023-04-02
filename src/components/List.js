import ListGroup from 'react-bootstrap/ListGroup';
import React, {useState, useEffect} from "react";

function List() {
    const [fio, setFio] = useState([]);
    const [url, setUrl] = useState("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
    const [img, setImg] = useState([]);

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
                setImg(rez);
            }
            console.log(rez);
           
        }
        cont();
    } , [url]);

    const fioClick = evt => {
        console.log(evt.target.getAttribute('id'));
        setUrl("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/"+evt.target.getAttribute('id')+".json")
    };


    return (
      <div>  
        <div className='fio'>  
            <ListGroup>
                {fio.map(o => <ListGroup.Item onClick={(evt) => fioClick(evt)} key={o.id} id={o.id}>{o.name}</ListGroup.Item>)}
            </ListGroup>
        </div>
      </div>
     
        
       
    )

}

export default List;