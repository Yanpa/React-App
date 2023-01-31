function Card(props) {
    return (
        <div className="card" onClick={() => {console.log(props.name + " was clicked")}}>
            <div className="content">
                <h1>{props.name}</h1>
                <h3>{props.job}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;