import React from "react";
import "./InfoBox.scss";
import Counter from "../Counter/Counter";


const InfoBox = (props) => {

    const {title, employeeArr} = props;
    const employeeCard = employeeArr.map((team, index) => {
        return (
        <div key ={title + index} className="employeeInfo">
           <p>
                Name: {team.name}
            </p>
            <p>
                Role: {team.role}
            </p>
            <Counter/>
        </div>
    )
    })

    return (
        <div className="container">
            {employeeCard}
        </div>
    )
};

export default InfoBox;