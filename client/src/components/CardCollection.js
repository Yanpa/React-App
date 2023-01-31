import Card from "./Card";
import { useEffect, useState } from "react";


function CardCollection(props) {
    const [cardsData, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cardCollectionData')
            .then(res => res.json())
            .then(cardsData => {setData(() => cardsData)})
    }, []);

    if(cardsData.length === 0) {
        return(
            <div className="loading-data-message">
                <h1>Loading data...</h1>
            </div>
        );
    }

    return (
        <div className="cards-container">
            {cardsData?.map(card => {
                return <Card
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    job={card.jobOcupation}
                />;
            })}
        </div>
    );
}

export default CardCollection;