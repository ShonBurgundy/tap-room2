import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, quantity } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      quantity: quantity
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleSellPint = (id) => {
    const newSelectedKeg = this.state.masterKegList.filter((keg) => keg.id === id)[0];
    if(newSelectedKeg.quantity === 0) {
      alert("Keg is tapped out, sorry dude!")
    } else {
      const decPint = newSelectedKeg.quantity -1;
      const sellPint = {...newSelectedKeg, quantity: decPint}
      const soldPint = this.state.masterKegList.filter((keg) => keg.id !== id);
      this.setState({
        masterKegList: [...soldPint, sellPint],
        selectedKeg: sellPint
      });
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, abv, quantity } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      quantity: quantity
    }
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
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = 
          <NewKegForm 
            onNewKegCreation={this.handleAddingNewKegToList}/>;
            buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = 
          <KegList 
            kegList={this.state.masterKegList} 
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

KegControl = connect()(KegControl);

export default KegControl;