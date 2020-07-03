import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
       brand: event.target.brand.value,
        price: event.target.price.value,
         abv: event.target.abv.value,
         fullKeg: event.target.fullKeg.value,
          id: v4()
        });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='abv'
          placeholder='ABV' />
        <input
          type='text'
          name='fullKeg'
          placeholder='Keg Volume' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;