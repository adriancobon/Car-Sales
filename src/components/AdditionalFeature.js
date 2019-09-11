import React from 'react';

const AdditionalFeature = props => {

  const addFeature = () => {
    props.addNewFeature(props.feature)
  }

  return (
    <li>
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
