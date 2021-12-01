import React from "react";
import "./InfoBox.scss";


const InfoBox = (props) => {

    const {title, employeeArr} = props;
    const employeeCard = employeeArr.map((team, index) => {
        return (
        <>
           <p key ={title + index} className="employeeInfo">Name:{team.name} Role:{team.role}</p>
        </>
    )
    })

    return (
        <div className="container">{employeeCard}</div>
    )
};

export default InfoBox;