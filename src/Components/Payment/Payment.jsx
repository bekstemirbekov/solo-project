import React from "react";
import Card from "react-credit-cards";



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
            {/* <Accordion> <AccordionSummary 
            expandIcon={<ExpandMoreIcon />} 
            aria-controls="panel1a-content" 
            id="panel1a-header" 
            ><AccordionSummary/>
            <h4 >Оплату можно воспроизвести при помощи кредитной карты VISA</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus error quo ex dignissimos, voluptas quaerat ipsum deserunt alias porro blanditiis, corporis accusamus tempore. Ratione aliquam doloremque vel commodi! Dolores, quasi deleniti eligendi possimus reiciendis, veniam beatae ea nihil aperiam ullam voluptas numquam illo rerum magnam velit sit modi quam unde asperiores sint soluta molestias maiores quos! Illo eveniet officia, distinctio maxime optio possimus aut eius sunt quia excepturi nostrum maiores nulla porro amet doloribus tenetur nemo laudantium corporis beatae? Veniam, deserunt? Esse, aliquid qui beatae reprehenderit, incidunt minus corporis eaque doloribus, veritatis sint consequuntur voluptates quisquam? Possimus, quas sint?</h6>
            </Accordion> */}
           

           
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
              paddingTop: '30px'
          }}>
            <div className="form-group">
              <input style={{width: '17rem', 
                display: 'flex',
                alignItems: 'center',
                paddingTop: '15px',
                marginTop: '5px',
                borderRadius: '5px'}}
                type="tel"
                name="number"
                className="form-control"
                placeholder="Номер карты"
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
                paddingTop: '15px',
                marginTop: '5px',
                borderRadius: '5px'}}
                type="text"
                name="name"
                className="form-control"
                placeholder="Имя пользователя"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row" >
              <div className="col-6" >
                <input
                style={{width: '17rem', 
                display: 'flex',
                alignItems: 'center',
                paddingTop: '15px',
                marginTop: '5px',
                borderRadius: '5px'}}
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
               style={{width: '17rem', 
                display: 'flex',
                alignItems: 'center',
                paddingTop: '15px',
                marginTop: '5px',
                borderRadius: '5px'}}
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
              <button style={{width: '10rem', 
                justifyContent: 'center',
                display: 'flex',
                padding: '10px',
                borderRadius: '25px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                marginTop: '5px'}}>Оплатить</button>
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
