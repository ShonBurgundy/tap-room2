import React from "react";
import { v4 } from 'uuid';

function NewKegForm(props){
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
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;