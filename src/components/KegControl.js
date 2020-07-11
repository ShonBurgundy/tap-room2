import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleSellPint = (id) => {
    const oldKeg = this.props.masterKegList[id];
    if(oldKeg.quantity === 0) {
      alert("Keg is tapped out, sorry dude!")
    } else {
      const decQuantity = oldKeg.quantity - 1;
      const newKeg = {...oldKeg, quantity: decQuantity}
      this.props.masterKegList[id] = newKeg;
      this.setState({
        selectedKeg: newKeg
      });
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }  

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = 
        <EditKegForm 
          keg = {this.state.selectedKeg} 
          onEditKeg = {this.handleEditingKegInList} />
          buttonText ="Return to Keg List";
    } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = 
          <KegDetail 
            keg = {this.state.selectedKeg}
            onClickingDelete = {this.handleDeletingKeg}
            onClickingEdit = {this.handleEditClick}
            onClickingSell={this.handleSellPint} />;
            buttonText ="Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = 
          <NewKegForm 
            onNewKegCreation={this.handleAddingNewKegToList}/>;
            buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = 
          <KegList 
            kegList={this.props.masterKegList} 
            onKegSelection={this.handleChangingSelectedKeg} />;
            buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateProps)(KegControl);

export default KegControl;