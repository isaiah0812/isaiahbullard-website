import React from 'react'
import Button from './button'
import { StyledFaIcon } from './styled-components'
import { white, lightBlue, red } from '../constants/colors'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

export class OrdersButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        style={{
          ...this.props.style,
          margin: '1.5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        circle
        width="3.5em"
        text={<StyledFaIcon icon={faUser} style={{width: '60%', height: 'auto'}} customColor={white} color={lightBlue} />}
        secondary
      />
    )
  }
}

export default class Orders extends React.Component {
  state = {
    email: '',
    code: '',
    notFound: false,
    loading: false,
    emailState: true,
    codeState: false,
    ordersState: false,
  }

  verifyEmailAndSendCode = () => {
    const api = axios.create()

    this.setState({
      loading: true
    }, () => {
      api.post(`${process.env.REACT_APP_API_URL}/customers/email`, {
        email: this.state.email
      }).then(customerFulfilled => customerFulfilled.data).then(customer => {
        this.setState({
          notFound: false,
          loading: false
        })
        console.log(customer)
      }).catch(customerRejected => {
        const error = customerRejected.response
        
        if(error) {
          if(error.status === 404) {
            this.setState({
              notFound: true,
              loading: false
            })
          } else {
            console.error("It's bad news, Zae")
          }
        } else {
          console.error(customerRejected)
        }
      })
    })
  }

  verifyCodeAndGetOrders = () => {
    const api = axios.create()

    // this.setState({
    //   loading: true
    // }, () => {
    //   api.post(`${process.env.REACT_APP_API_URL}/customers/email`, {
    //     email: this.state.email
    //   }).then(customerFulfilled => customerFulfilled.data).then(customer => {
    //     this.setState({
    //       notFound: false,
    //       loading: false
    //     })
    //     console.log(customer)
    //   }).catch(customerRejected => {
    //     const error = customerRejected.response
        
    //     if(error) {
    //       if(error.status === 404) {
    //         this.setState({
    //           notFound: true,
    //           loading: false
    //         })
    //       } else {
    //         console.error("It's bad news, Zae")
    //       }
    //     } else {
    //       console.error(customerRejected)
    //     }
    //   })
    // })
  }

  render() {
    return (
      <Modal
        {...(this.props)}
        centered
        size="lg"
        scrollable
      >
        <Form onSubmit={(e) => {
          e.preventDefault()
          if(this.state.emailState) {
            this.verifyEmailAndSendCode()
          } else if (this.state.codeState) {
            
          }
        }}>
          <Modal.Header closeButton>
            View Your Orders
          </Modal.Header>
          <Modal.Body style={{ maxHeight: '65vh', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            {this.state.emailState && (
              <React.Fragment>
                <h3>Enter your E-mail Address</h3>
                <p style={{ lineHeight: 'normal' }}>If your email is found in the system, we'll send you an access code to enter in the next step.</p>
                {this.state.loading
                  ? <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue, alignSelf: 'center'}} />
                  : <Form.Control 
                      placeholder="Email Address"
                      type='email'
                      value={this.state.code}
                      onChange={(e) => this.setState({code: e.target.value})}
                      style={{
                        textAlign: 'center'
                      }}
                    />
                }
                {this.state.notFound && <p style={{ lineHeight: 'normal', color: red }}>This email wasn't found.</p>}
              </React.Fragment>
            )}
            {this.state.codeState && (
              <React.Fragment>
                <h3>Check your E-Mail</h3>
                <p style={{ lineHeight: 'normal' }}>Found your E-mail in our records. Please enter the code that was e-mailed to you to see your order information.</p>
                {this.state.loading
                  ? <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue, alignSelf: 'center'}} />
                  : <Form.Control 
                      placeholder="Access Code"
                      value={this.state.email}
                      onChange={(e) => this.setState({email: e.target.value})}
                      style={{
                        textAlign: 'center'
                      }}
                    />
                }
                {this.state.notFound && <p style={{ lineHeight: 'normal', color: red }}>This email wasn't found.</p>}
              </React.Fragment>
            )}
          </Modal.Body>
          <Modal.Footer style={{ padding: '0.5%' }}>
            <Button 
              width="10rem"
              submit
              text="Send Code" />
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}