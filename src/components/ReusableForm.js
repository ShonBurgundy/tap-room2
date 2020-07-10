import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
          <br></br>
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
          <br></br>
        <input
          type='text'
          name='price'
          placeholder='Price' />
          <br></br>
        <input
          type='text'
          name='abv'
          placeholder='ABV' />
          <br></br>
        <input
          type='text'
          name='quantity'
          placeholder='Keg Volume'
          value='124' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;