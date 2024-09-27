import React from "react";
import './App.css';

function Card({ item }) {
    let BadgeText 
    if(item.openSpots === 0){
        BadgeText = "SOLDOUT"
    } else if(item.location === 'Online'){
        BadgeText = "ONLINE"
    }
    return (
        <div className="card">
            {
                BadgeText && 
                <div className="card--badge">{BadgeText}</div>
            }
            <img src={item.coverImg} alt={item.title} />
            <div className="card-stats">
                <img className="rating" src="https://imgs.search.brave.com/JZPZZTwvvhpJMrcber2UpzzukQdsI2Gsbn9zMyLy-Zc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9zdGFyLWlj/b24tMjU2eDI1NC0z/cHdiMjF5NS5wbmc" alt="Star Rating" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
    );
}

export default Card;
