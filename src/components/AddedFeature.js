import React from 'react';

const AddedFeature = props => {

  const removeFeatureFunc = () => {
    props.removeFeature(props.feature);
  }

  return (
    <li>
      <button onClick={removeFeatureFunc} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
