import {  MDBCol, MDBContainer, MDBModalFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBModalFooter className='text-center bg-dark text-white' >
      <MDBContainer className='p-4'>
        <section className='mb-1'>
          <p style={{
              fontSize: '1.5rem'
          }}>
          Your vacation is our concern
          </p>
        </section>
        <section className=''>
          <MDBRow>
            
          <MDBCol lg='7' md='6' className='mb-1 mb-md-0'>
             <Link style={{textDecoration: 'none', color: 'aqua'}} to={'/main'}>
              <h6 className='text-uppercase'>Main</h6>
              </Link>
              <ul className='list-unstyled mb-0'>
                <li>
                  
                  <a href='/' className='text-white' style={{
                       marginTop: '1rem',
                       display: 'inline-block',
                       padding:'.3rem 4rem',
                       fontSize: '1rem',
                       color: '#29d9d5',
                       border: '.2rem solid #29d9d5',
                       borderRadius: '5rem',
                       cursor: 'pointer',
                       background: 'none'
                  }}>
                    Shop
                  </a>
                </li>
                <li>
                  <a href='/cart' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                    Cart
                  </a>
                </li>
                <li>
                  <a href='/login' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                    Sign in
                  </a>
                </li>
                <li>
                  <a href='/register' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                    Sign up
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{
                color: 'aqua'
            }}>
              <h6 className='text-uppercase'>Our services</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                      Addres
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                    hospitality
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                    
                    Our contacts
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{
                      marginTop: '1rem',
                      display: 'inline-block',
                      padding:'.3rem 4rem',
                      fontSize: '1rem',
                      color: '#29d9d5',
                      border: '.2rem solid #29d9d5',
                      borderRadius: '5rem',
                      cursor: 'pointer',
                      background: 'none'
                  }}>
                    
                    Locations
                  </a>
                </li>
              </ul>
            </MDBCol>

           
          </MDBRow>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
      </div>
    </MDBModalFooter>
  );
}
