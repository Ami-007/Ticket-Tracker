import React from "react";
import "./InfoBox.scss";
import Counter from "../Counter/Counter";


const InfoBox = (props) => {

    const {title, employeeArr} = props;
    const employeeCard = employeeArr.map((team, index) => {
        return (
        <div key ={title + index} className="employeeInfo">
           <h4>
               {team.name}
            </h4>
            <h4>
                {team.role}
            </h4>
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