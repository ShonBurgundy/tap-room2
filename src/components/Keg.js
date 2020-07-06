import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
         <h3>Brewed by:{props.brand}</h3>
        <h4>${props.price}</h4>
        <h4>{props.abv}% ABV</h4>
        <h4>{props.quantity} pints remaining</h4>
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
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;