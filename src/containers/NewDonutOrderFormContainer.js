import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../components/InputField'

class NewDonutOrderFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      newFlavor: ''
    }
    this.clearForm = this.clearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  clearForm() {
    this.setState({
      newName: '',
      newFlavor: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.props.addDonutOrder({
      name: this.state.newName,
      flavor: this.state.newFlavor
    })
    this.clearForm()
  }

  handleFieldChange(event) {
    const key = event.currentTarget.name
    const value = event.currentTarget.value
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div className='small-6 columns'>
        <h1>Add a New Donut Order</h1>
        <form onSubmit={this.handleFormSubmit}>
          <InputField
            key='newName'
            label='Your Name'
            type='text'
            name='newName'
            value={this.state.newName}
            handleChange={this.handleFieldChange}
          />
          <InputField
            key='newFlavor'
            label='Flavor'
            type='text'
            name='newFlavor'
            value={this.state.newFlavor}
            handleChange={this.handleFieldChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
};

export default NewDonutOrderFormContainer;
