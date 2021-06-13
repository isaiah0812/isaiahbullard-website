import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { CartContext } from './cart';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { silver, darkBlue, lightBlue, white } from '../constants/colors';
import { StyledModalSection } from './styled-components';
import Modal from 'react-bootstrap/Modal';
import Button from './button'
import { ProfileContext } from './profile';

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
    const { name, quantity, price } = this.props.item
    return (
      <StyledCartSummaryDiv>
        <p style={{lineHeight: 'normal'}}>{name} x {quantity}</p>
        <p style={{lineHeight: 'normal'}}>${price.toFixed(2)}</p>
      </StyledCartSummaryDiv>
    )
  }
}

class Checkout extends React.Component {

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
    saveCustomer: false,
    cardholderName: '',
    sameShippingBilling: false,
  }

  getSubtotal = (cart) => {
    let total = 0;

    for(let item of cart) {
      total += item.price;
    }

    return total;
  }

  handleSubmit = (e, cart) => {
    e.preventDefault();

    const api = axios.create()
    const { isAuthenticated, user } = this.props.auth0

    this.card.tokenize().then(tokenResult => {
      if(tokenResult.status === 'OK') {
        console.log(tokenResult.token)
        api.post(`${process.env.REACT_APP_API_URL}/orders`, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          cart: cart,
          token: tokenResult.token,
          shippingAddress: {
            line1: this.state.shippingAddress.addressLine1,
            line2: this.state.shippingAddress.addressLine2,
            line3: this.state.shippingAddress.addressLine3,
            city: this.state.shippingAddress.city,
            state: this.state.shippingAddress.state,
            postalCode: this.state.shippingAddress.postalCode
          },
          billingAddress: {
            line1: this.state.sameShippingBilling
                    ? this.state.shippingAddress.addressLine1
                    : this.state.billingAddress.addressLine1,
            line2: this.state.sameShippingBilling
                    ? this.state.shippingAddress.addressLine2
                    : this.state.billingAddress.addressLine2,
            line3: this.state.sameShippingBilling
                    ? this.state.shippingAddress.addressLine3
                    : this.state.billingAddress.addressLine3,
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
          saveCustomer: isAuthenticated || this.state.saveCustomer,
          cardholderName: this.state.cardholderName,
          auth0Id: isAuthenticated ? user.sub : undefined
        }).then(res => {
          console.log(res.data)
        })
      } else {
        console.error(tokenResult.errors)
      }
    })
  }

  onShow = () => {
    async function main() {
      const payments = window.Square.payments(process.env.REACT_APP_SQUARE_APP_ID, process.env.REACT_APP_SQUARE_LOC_ID);
      const card = await payments.card();
      await card.attach('#card-box');

      return card
    }

    main().then((card) => this.card = card)
  }

  render() {
    const { isAuthenticated } = this.props.auth0

    return (
      <Modal
        {...(this.props)}
        scrollable
        size="xl"
        centered
        onShow={() => this.onShow()}
      >
        <CartContext.Consumer>
          {({cart}) => (
            <ProfileContext.Consumer>
              {({firstName, lastName, email}) => (
                <Form onSubmit={(e) => this.handleSubmit(e, cart)}>
                  <Modal.Header closeButton>Checkout</Modal.Header>
                  <Modal.Body style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxHeight: '65vh' }}>
                    <StyledModalSection>
                      <Form.Label>Personal Information</Form.Label>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="First Name"
                            type="text"
                            value={this.state.firstName}
                            defaultValue={isAuthenticated ? firstName : ''}
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
                            defaultValue={isAuthenticated ? lastName : ''}
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
                            defaultValue={isAuthenticated ? email : ''}
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
                            value={this.state.shippingAddress.addressLine1}
                            onChange={(e) =>
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), addressLine1: e.target.value}
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
                            value={this.state.shippingAddress.addressLine2}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), addressLine2: e.target.value}
                              })
                            } />
                        </Col>
                      </StyledFormRow>
                      <StyledFormRow>
                        <Col>
                          <Form.Control
                            placeholder="Address Line 3 (Optional)"
                            type="text"
                            value={this.state.shippingAddress.addressLine3}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), addressLine3: e.target.value}
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
                            <option value="Arkansas">Arkansas (AR)</option>
                            <option value="Texas">Texas (TX)</option>
                            <option value="Oregon">Oregon (OR)</option>
                            <option value="Washington">Washington (WA)</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Postal Code"
                            type="text"
                            value={this.state.shippingAddress.postalCode}
                            onChange={(e) => 
                              this.setState({
                                shippingAddress: {...(this.state.shippingAddress), postalCode: e.target.value}
                              })
                            }
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
                                value={this.state.billingAddress.addressLine1}
                                onChange={(e) =>
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), addressLine1: e.target.value}
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
                                value={this.state.billingAddress.addressLine2}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), addressLine2: e.target.value}
                                  })
                                } />
                            </Col>
                          </StyledFormRow>
                          <StyledFormRow>
                            <Col>
                              <Form.Control
                                placeholder="Address Line 3 (Optional)"
                                type="text"
                                value={this.state.billingAddress.addressLine3}
                                onChange={(e) => 
                                  this.setState({
                                    billingAddress: {...(this.state.billingAddress), addressLine3: e.target.value}
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
                                <option value="Arkansas">Arkansas (AR)</option>
                                <option value="Texas">Texas (TX)</option>
                                <option value="Oregon">Oregon (OR)</option>
                                <option value="Washington">Washington (WA)</option>
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
                      <StyledFormRow>
                        {isAuthenticated
                          ? (
                            <Col>
                              <Form.Text style={{fontSize: '1em', backgroundColor: lightBlue, color: white, padding: '1%'}}>
                                You're signed in, so I'm going to assume you
                                want your information saved, if it isn't already.
                              </Form.Text>
                            </Col>
                          ) : (
                            <Col>
                              <Form.Check 
                                type="checkbox"
                                label="I want to save my information for later use."
                                checked={this.state.saveCustomer}
                                onChange={() => this.setState({saveCustomer: !this.state.saveCustomer})} />
                              <Form.Text style={{fontSize: '0.7em'}}>
                                I promise, none of this information is going to be
                                used to send you any mail of the physical or
                                electronic variety, unless it pertains to your
                                Payments and Orders. This is just so that the next
                                time you want to give me money, you don't have to type
                                in all of this information again.
                              </Form.Text>
                            </Col>
                          )
                        }
                      </StyledFormRow>
                    </StyledModalSection>
                    <StyledModalSection sticky style={{height: '100%'}}>
                      <h2>Cart Summary</h2>
                      <hr style={{width: '100%', borderWidth: 3, borderColor: darkBlue}} />
                      {cart.map(cartItem => (
                        <CartSummaryItem item={cartItem} />
                      ))}
                      <hr style={{width: '100%', borderWidth: 2, borderColor: silver}} />
                      <StyledCartSummaryDiv>
                        <h3>Subtotal:</h3>
                        <h3>${this.getSubtotal(cart).toFixed(2)}</h3>
                      </StyledCartSummaryDiv>
                    </StyledModalSection>
                  </Modal.Body>
                  <Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
                    <Button width="48%" text="Back to Cart" secondary onClick={this.props.cart} />
                    <Button width="48%" text="Process Checkout" submit id="card-button" />
                  </Modal.Footer>
                </Form>
              )}
            </ProfileContext.Consumer>
          )}
        </CartContext.Consumer>
      </Modal>
    )
  }
}

export default withAuth0(Checkout);