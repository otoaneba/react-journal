import React from "react";

function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={`assets/${props.item.imgLink}`} className="card--image"/>
            <div className="card--details">
                <div className="card--header">
                    <img src={`assets/map-pin.png`} className="card--map--pin"/>
                    <p className="card--country">{props.item.country}</p>
                    <a className="card--map--link" href="">Google maps link</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--date">{props.item.date}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card