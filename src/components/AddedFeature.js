import React from 'react';
import { removeFeature } from "../store/actions";
import { connect } from "react-redux"

const AddedFeature = props => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeItem(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
