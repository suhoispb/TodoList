import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

state={
  label:''
}

onLabelChange = (e) => {
  this.setState({
    label:e.target.value
  })
}

onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label:''
    })
}

  render() {
    return (
      <form className="item-add-form "
            onSubmit={this.onSubmit} >
        <input className="form-control"
               type="text"
               onChange={this.onLabelChange}
               value={this.state.label}>
        </input>
        <button
          className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    )
  }
}
