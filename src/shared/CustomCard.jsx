import React from "react";
import CustomText from "./CustomText";
import CustomButton from "./CustomButton";

const CustomCard = (props) => {
  const {turno} = props

  return (
    <div className="border rounded p-3 text-start">
      {Object.entries(turno).map(([key, value], index) => (
        <CustomText key={index}  text={`${key.toUpperCase()} : ${value}`}/>
      ))}

      <div className="d-flex justify-content-between">
        <CustomButton className={'btn btn-warning'} text={'Edit'}/>
        <CustomButton className={'btn btn-danger'} text={'Delete'}/>

      </div>
    </div>
  );
};

export default CustomCard;
