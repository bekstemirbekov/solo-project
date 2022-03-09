import React from "react";
import Card from "react-credit-cards";
import './Payment.css'



import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { Accordion } from "@mui/material";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '15px'
          }}>
            <div className="form-group">
              <input style={{width: '17rem', 
                display: 'flex',
                alignItems: 'center',
                padding: '10px ',
                marginTop: '5px',
                color: 'white',
                border: '2px solid #29d9d5',
                borderRadius: '.5rem',
                cursor: 'pointer',
                background: '#222222',
                textAlign: 'center'
                }}
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input style={{width: '17rem', 
                display: 'flex',
                alignItems: 'center',
                padding: '10px ',
                marginTop: '5px',
                color: 'white',
                border: '2px solid #29d9d5',
                borderRadius: '.5rem',
                cursor: 'pointer',
                background: '#222222',
                textAlign: 'center'
                }}
                type="text"
                name="name"
                className="form-control"
                placeholder="Name of holder"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row" >
              <div className="col-6" >
                <input
                style={{width: '8rem', 
                display: 'flex',
                marginTop: '5px',
                alignItems: 'center',
                padding: '8px ',
                color: 'white',
                border: '2px solid #29d9d5',
                borderRadius: '.5rem',
                cursor: 'pointer',
                background: '#222222',
                textAlign: 'center'
                }}
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Data Validade"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                
              </div>
                <input
               style={{width: '6rem', 
                display: 'flex',
                marginTop: '5px',
                marginLeft:'15px',
                alignItems: 'center',
                padding: '8px',
                color: 'white',
                border: '2px solid #29d9d5',
                borderRadius: '.5rem',
                cursor: 'pointer',
                background: '#222222',
                textAlign: 'center'
              }}
               type="tel"
               name="cvc"
               className="form-control"
               placeholder="CVC"
               pattern="\d{3,4}"
               required
               onChange={this.handleInputChange}
               onFocus={this.handleInputFocus}
             />
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <Link to='/' style={{textDecoration: 'none'}}>
              <button style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '1rem 0',
                display: 'inline-block',
                padding: '.5rem 3rem',
                fontSize: '1rem',
                color: 'white',
                border: '0.2rem solid #29d9d5',
                borderRadius: '5rem',
                cursor: 'pointer',
                background: '#222222',
                textAlign: 'center'
              }}>get pay</button>
              </Link>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          <hr style={{ margin: "60px 0 30px" }} />

        </div>

      
      </div>
    );
  }
}
