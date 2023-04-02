import React, {useState, useEffect} from "react";

function List() {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        console.log("1");
        const cont = async() => {
            const response = await fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const news = await response.json();
            setNews(news);
            console.log(news);
        }
        cont();
    } , []);

    return (
        <ul>
            {news.map(o => <li key={o.id}>{o.name}</li>)}
        </ul>
    )

}

export default List;