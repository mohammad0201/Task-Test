import React from "react";
import pink from "Assets/images/pink.svg";
import "./PinkCard.scss";

const PinkCard = () => {
    return (
        <div className="card-pink">
            <div>
                <span style={{ position: "relative", top: 55, left: 43 }}>LEVEL 13</span>
                <img src={pink} alt="pinkwoman" className="img-pink" />
                <span style={{ position: "relative", top: -50, left: 36 }}>5,312 POINTS</span>
            </div>
            <div>
                <h1>Jane Doe</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>
                <h5>Mouse over the card for more info</h5>
            </div>
            <div className="detail">
                <div className="information">
                    <h4>Group Name</h4>
                    <h4>Position/Role</h4>
                </div>
                <div className="information">
                    <h4>Joined January 2019</h4>
                    <h4>City, Countrys</h4>
                </div>
            </div>
            <div className="badge">
                <h4 className="badge-trophy">Awards<i className="fa fa-trophy"></i>2</h4>
                <h4 className="badge-game">Matches<i className="fa fa-gamepad"></i>27</h4>
                <h4 className="badge-group">Pals<i class="fa fa-users"></i>123</h4>
                <h4 className="badge-coffe">Coffee<i className="fa fa-coffee"></i>∞</h4>
            </div>
        </div>
    );
};

export default PinkCard;
