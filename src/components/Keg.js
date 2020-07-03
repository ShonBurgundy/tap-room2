import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  // const fullKeg = 124;
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <h4>{props.price}</h4>
        <h4>{props.abv}</h4>
        <h4>{props.fullKeg} pints</h4>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  fullKeg: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;