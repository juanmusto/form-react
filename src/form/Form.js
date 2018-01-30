import React, { Component } from 'react';
import FormRow from "./FormRow";
import './form.css';

class Form extends Component {
  // this.refs.nombreComponente.nombreMetodo
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      labelLegend: ""
    }
  }



  onSubmit(e){
    e.preventDefault();
    let nombre = this.refs.nombre.getValue();
    let apellido = this.refs.apellido.getValue();
    let email = this.refs.email.getValue();
    let password = this.refs.password.getValue();
    let confirm_password = this.refs.confirm_password.getValue();

    if (password === confirm_password) {
      this.setState({labelLegend: 'Logeado exitosamente'});
    } else {
      alert("Error")
    }
  }
  render(){
    return(
      <div className="Form">
        <form onSubmit={this.onSubmit} className="Form-form">
          <h2 className="Form-title">Registro</h2>

          <FormRow
            inputType="text"
            labelText="Nombre:"
            isRequired={true}
            ref="nombre"
          />
          <FormRow
            inputType="text"
            labelText="Apellido:"
            isRequired={true}
            ref="apellido"
          />
          <FormRow
            inputType="email"
            labelText="Email:"
            isRequired={true}
            ref="email"
          />
          <FormRow
            inputType="password"
            labelText="Password:"
            isRequired={true}
            ref="password"
          />
          <FormRow
            inputType="password"
            labelText="Confirm Password:"
            isRequired={true}
            ref="confirm_password"
          />
          <button
            className="Form-button"
            onClick={this.onRegister}>
            Registro</button>
          <label className="Form-labelLegend">{this.state.labelLegend}</label>
        </form>
      </div>
    )
  }
}

export default Form;
