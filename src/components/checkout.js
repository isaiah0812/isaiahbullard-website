import React from 'react';
import { CartContext } from './cart';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { silver, darkBlue, lightBlue } from '../constants/colors';
import { StyledModalSection } from './styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from './button'
import Spinner from 'react-bootstrap/Spinner';
import states from '../constants/states.json';
import Alert from 'react-bootstrap/Alert';

const StyledCartSummaryDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
`

class StyledFormRow extends React.Component {
  render() {
    return (
      <Form.Row style={{margin: '2% 0%'}}>
        {this.props.children}
      </Form.Row>
    )
  }
}

class CartSummaryItem extends React.Component {
  render() {
    const { name, quantity, price, size } = this.props.item
    return (
      <StyledCartSummaryDiv>
        <p style={{lineHeight: 'normal'}}>{`${name}${size ? ` (${size.name})`: ``}`} x {quantity}</p>
        <p style={{lineHeight: 'normal'}}>${price.toFixed(2)}</p>
      </StyledCartSummaryDiv>
    )
  }
}

export class CheckoutConfirmation extends React.Component {
  render() {
    const { firstName, email } = this.props.order.customer
    const { shippingRate, totalCost, orderId } = this.props.order
    return (
      <Modal
        {...(this.props)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          {`Thank you, ${firstName}!`}
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center'}}>
          <h2>Your order has been placed!</h2>
          <h4>Order Number: {orderId}</h4>
          <hr />
          <p>When your order is shipped, you will be charged ${totalCost.toFixed(2)} (${shippingRate.toFixed(2)} for shipping).</p>
          <p>Check your email ({email}) for confirmation.</p>
          <p>If you have any questions or concerns, go to the <a href="/contact">Contact Page</a> and enter as much information about your order as you can with your concern (order number, email address, your order items, etc.).</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default class Checkout extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    shippingAddress: {
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      city: '',
      state: '',
      postalCode: '',
    },
    billingAddress: {
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      city: '',
      state: '',
      postalCode: '',
    },
    cardholderName: '',
    sameShippingBilling: false,
    shippingRate: 0,
    gettingShipping: false,
    processing: false,
    errorMessage: '',
    error: false,
    validShipping: false
  }

  getCartWeight = (cart) => {
    let weight = 0
    for(let item of cart) {
      weight += (item.weight * item.quantity)
    }

    return weight
  }

  getShippingRate = (cart) => {
    const api = axios.create()

    this.setState({
      gettingShipping: true
    }, () => (
      api.post(`${process.env.REACT_APP_API_URL}/orders/rates/estimate`, {
        postalCode: this.state.shippingAddress.postalCode,
        weight: {
          value: this.getCartWeight(cart),
          unit: "ounce"
        }
      }).then((rates) => {
        if(rates.data.rate) {
          this.setState({
            shippingRate: rates.data.rate,
            gettingShipping: false,
            validShipping: true
          })
        } else {
          this.setState({
            shippingRate: 0,
            gettingShipping: false,
            validShipping: false
          })
        }
      }).catch((error) => {
        this.setState({
          shippingRate: 0,
          gettingShipping: false,
          validShipping: false,
          errorMessage: error.response.data.code === "SHIPPING_RATE_ERROR" 
            ? 'Error getting shipping rate. Check the Postal Code of your Shipping address.' 
            : 'Internal Server Error. Please send a message through the Contact Page if the problem persists.',
          error: true
        })
      })
    ))
  }

  getSubtotal = (cart) => {
    let total = 0;

    for(let item of cart) {
      total += item.price;
    }

    return total
  }

  getTotalPrice = (cart) => {
    return this.state.shippingRate + this.getSubtotal(cart);
  }

  handleSubmit = (e, cart) => {
    e.preventDefault();

    const api = axios.create()

    const apiCart = []
    for(let item of cart) {
      apiCart.push({
        merchId: item.merchId,
        quantity: item.quantity,
        sizeId: item.size ? item.size.id : undefined
      })
    }

    this.setState({
      processing: true
    }, () => (
      this.card.tokenize().then((tokenResult) => {
        if(tokenResult.status === 'OK') {          
          api.post(`${process.env.REACT_APP_API_URL}/orders`, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            cart: apiCart,
            token: tokenResult.token,
            shippingAddress: {
              line1: this.state.shippingAddress.line1,
              line2: this.state.shippingAddress.line2,
              line3: this.state.shippingAddress.line3,
              city: this.state.shippingAddress.city,
              state: this.state.shippingAddress.state,
              postalCode: this.state.shippingAddress.postalCode
            },
            billingAddress: {
              line1: this.state.sameShippingBilling
                      ? this.state.shippingAddress.line1
                      : this.state.billingAddress.line1,
              line2: this.state.sameShippingBilling
                      ? this.state.shippingAddress.line2
                      : this.state.billingAddress.line2,
              line3: this.state.sameShippingBilling
                      ? this.state.shippingAddress.line3
                      : this.state.billingAddress.line3,
              city: this.state.sameShippingBilling
                      ? this.state.shippingAddress.city
                      : this.state.billingAddress.city,
              state: this.state.sameShippingBilling
                      ? this.state.shippingAddress.state
                      : this.state.billingAddress.state,
              postalCode: this.state.sameShippingBilling
                      ? this.state.shippingAddress.postalCode
                      : this.state.billingAddress.postalCode,
            },
            email: this.state.email,
            cardholderName: this.state.cardholderName,
          }).then(res => {
            this.props.confirm(res.data)
            this.setState({
              processing: false
            })
          }).catch(err => {
            const response = err.response.data

            if(response.code === "SOLD_OUT" || response.code === "TOO_MANY") {
              this.setState({
                errorMessage: response.message,
                error: true,
                processing: false
              }, () => this.getPaymentSdk())
            } else if(response.code === "CARDS_API_ERROR") {
              this.setState({
                errorMessage: 'Your card information is not correct.',
                error: true,
                processing: false
              }, () => this.getPaymentSdk())
            } else if(response.code === "CUSTOMERS_API_ERROR") {
              this.setState({
                errorMessage: 'Your customer information is not valid.',
                error: true,
                processing: false
              }, () => this.getPaymentSdk())
            } else {
              this.setState({
                errorMessage: `Internal Server Error. Please send a message via the Contact Page if the problem persists.`,
                error: true,
                processing: false
              }, () => this.getPaymentSdk())
            }
          })
        } else {
          this.setState({
            errorMessage: 'Error making token for card.',
            error: true,
            processing: false
          }, () => this.getPaymentSdk())
        }
      })
    ))

  }

  getPaymentSdk = () => {
    async function main() {
      const payments = window.Square.payments(process.env.REACT_APP_SQUARE_APP_ID, process.env.REACT_APP_SQUARE_LOC_ID);
      const card = await payments.card();
      await card.attach('#card-box');

      return card
    }

    main().then((card) => this.card = card)
  }

  render() {
    return (
      <Modal
        {...(this.props)}
        scrollable
        size="xl"
        centered
        onShow={() => {
          this.getPaymentSdk()
          this.setState({ error: false })
        }}
      >
        <CartContext.Consumer>
          {({cart}) => (
            <Form onSubmit={(e) => this.handleSubmit(e, cart)}>
              <Modal.Header closeButton>Checkout</Modal.Header>
              <Modal.Body style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxHeight: '65vh', justifyContent: 'center' }}>
                {this.state.processing ? (<Spinner animation="border" style={{margin: '2% 0%', color: lightBlue}} />) : (
                  <React.Fragment>
                    <StyledModalSection>
                      <Form.Label>Personal Information</Form.Label>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="First Name"
                            type="text"
                            value={this.state.firstName}
                            onChange={(e) =>
                              this.setState({firstName: e.target.value})
                            }
                            required />
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Last Name"
                            type="text"
                            value={this.state.lastName}
                            onChange={(e) => 
                              this.setState({lastName: e.target.value})
                            }
                            required />
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="Email"
                            type="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            required />
                        </Col>
                      </StyledFormRow>
                      <Form.Label>Shipping Address</Form.Label>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="Address Line 1"
                            type="text"
                            value={this.state.shippingAddress.line1}
                            onChange={(e) =>
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), line1: e.target.value}
                              })
                            }
                            required />
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="Address Line 2 (Optional)"
                            type="text"
                            value={this.state.shippingAddress.line2}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), line2: e.target.value}
                              })
                            } />
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="Address Line 3 (Optional)"
                            type="text"
                            value={this.state.shippingAddress.line3}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), line3: e.target.value}
                              })
                            } />
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="City"
                            type="text"
                            value={this.state.shippingAddress.city}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), city: e.target.value}
                              })
                            }
                            required />
                        </Col>
                        <Col>
                          <Form.Control 
                            as="select"
                            value={this.state.shippingAddress.state}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), state: e.target.value}
                              })
                            }
                            required={this.state.shippingAddress.state.length === 0} >
                            <option value="">Select a State...</option>
                            {states.map(state => <option value={state.abbreviation}>{`${state.name} (${state.abbreviation})`}</option>)}
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Postal Code"
                            type="text"
                            value={this.state.shippingAddress.postalCode}
                            onChange={(e) => {
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), postalCode: e.target.value}
                              })
                            }}
                            onBlur={() => this.getShippingRate(cart)}
                            required />
                        </Col>
                      </StyledFormRow>
                      <Form.Label>Payment Information</Form.Label>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="Cardholder Name"
                            type="text"
                            value={this.state.cardholderName}
                            onChange={(e) => this.setState({cardholderName: e.target.value})}
                            required />
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <div style={{width: '100%'}} id="card-box"></div>
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <Form.Check 
                            type="checkbox"
                            label="Use Shipping Address as Billing Address?"
                            checked={this.state.sameShippingBilling}
                            onChange={() => this.setState({sameShippingBilling: !this.state.sameShippingBilling})} />
                        </Col>
                      </StyledFormRow>
                      {!this.state.sameShippingBilling && (
                        <React.Fragment>
                          <Form.Label>Billing Address</Form.Label>
                          <StyledFormRow>
                            <Col>
                              <Form.Control
                                placeholder="Address Line 1"
                                type="text"
                                value={this.state.billingAddress.line1}
                                onChange={(e) =>
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), line1: e.target.value}
                                  })
                                }
                                required />
                            </Col>
                          </StyledFormRow>
                          <StyledFormRow>
                            <Col>
                              <Form.Control
                                placeholder="Address Line 2 (Optional)"
                                type="text"
                                value={this.state.billingAddress.line2}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), line2: e.target.value}
                                  })
                                } />
                            </Col>
                          </StyledFormRow>
                          <StyledFormRow>
                            <Col>
                              <Form.Control
                                placeholder="Address Line 3 (Optional)"
                                type="text"
                                value={this.state.billingAddress.line3}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), line3: e.target.value}
                                  })
                                } />
                            </Col>
                          </StyledFormRow>
                          <StyledFormRow>
                            <Col>
                              <Form.Control
                                placeholder="City"
                                type="text"
                                value={this.state.billingAddress.city}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), city: e.target.value}
                                  })
                                }
                                required />
                            </Col>
                            <Col>
                              <Form.Control 
                                as="select"
                                value={this.state.billingAddress.state}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), state: e.target.value}
                                  })
                                }
                                required={this.state.billingAddress.state.length === 0} >
                                <option value="">Select a State...</option>
                                {states.map(state => <option value={state.abbreviation}>{`${state.name} (${state.abbreviation})`}</option>)}
                              </Form.Control>
                            </Col>
                            <Col>
                              <Form.Control
                                placeholder="Postal Code"
                                type="text"
                                value={this.state.billingAddress.postalCode}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), postalCode: e.target.value}
                                  })
                                }
                                required />
                            </Col>
                          </StyledFormRow>
                        </React.Fragment>
                      )}
                    </StyledModalSection>
                    <StyledModalSection sticky style={{height: '100%'}}>
                      <h2>Cart Summary</h2>
                      <hr style={{width: '100%', borderWidth: 3, borderColor: darkBlue}} />
                      {cart.map(cartItem => (
                        <CartSummaryItem item={cartItem} />
                      ))}
                      <hr style={{width: '100%', borderWidth: 1, borderColor: darkBlue}} />
                      <StyledCartSummaryDiv>
                        <p style={{lineHeight: 'normal'}}>Shipping</p>
                        {this.state.gettingShipping 
                          ? <Spinner animation="border" style={{color: lightBlue}} />
                          : <p style={{lineHeight: 'normal'}}>${this.state.validShipping ? `${this.state.shippingRate.toFixed(2)}` : `-.--`}</p>
                        }
                      </StyledCartSummaryDiv>
                      <hr style={{width: '100%', borderWidth: 2, borderColor: silver}} />
                      <StyledCartSummaryDiv>
                        <h3>Subtotal:</h3>
                        <h3>${this.getTotalPrice(cart).toFixed(2)}</h3>
                      </StyledCartSummaryDiv>
                      <Alert variant='danger' dismissible show={this.state.error} onClose={() => this.setState({ error: false })}>
                        <Alert.Heading>Error</Alert.Heading>
                        {this.state.errorMessage}
                      </Alert>
                    </StyledModalSection>
                  </React.Fragment>
                )}
              </Modal.Body>
              <Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
                <Button 
                  width="48%"
                  text="Back to Cart"
                  secondary
                  onClick={this.state.processing ? () => {} : this.props.cart} />
                <Button
                  width="48%"
                  text="Process Checkout"
                  submit={!this.state.gettingShipping && !this.state.processing && this.state.validShipping}
                  muted={this.state.gettingShipping || this.state.processing || !this.state.validShipping} />
              </Modal.Footer>
            </Form>
          )}
        </CartContext.Consumer>
      </Modal>
    )
  }
}