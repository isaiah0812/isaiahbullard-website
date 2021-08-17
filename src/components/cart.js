import React from 'react';
import { 
  faShoppingCart,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { StyledFaIcon } from './styled-components';
import Button from './button';
import {
  lightBlue,
  red,
  white
} from '../constants/colors';
import styled from 'styled-components';

export const CartContext = React.createContext({
  cart: [],
  addToCart: () => {}
})

const QuantityButton = styled.button`
  margin: 1%;
  border: none;
  background-color: transparent;

  &:hover {
    color: ${lightBlue}
  }
`

export class CartButton extends React.Component {
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
        text={<StyledFaIcon icon={faShoppingCart} style={{width: '60%', height: 'auto'}} customColor={white} color={lightBlue} />}
        secondary
      />
    )
  }
}

class CartItem extends React.Component {
  state = {
    quantity: this.props.item.quantity,
    price: this.props.item.price
  }

  render() {
    const equalWidth = {
      width: '25%'
    }
    const { name, thumbnail, cap, size } = this.props.item
    return (
      <tr>
        <td style={{...equalWidth}}>
          <Image
            src={`${thumbnail}`}
            alt={name}
            style={{
              width: '100%'
            }}
          />
        </td>
        <td style={{...equalWidth}}>
          <h4>{`${name}${size ? ` (${size.name})` : ``}`}</h4>
        </td>
        <td style={{...equalWidth, textAlign: 'center'}}>
          <QuantityButton onClick={() => {
            if(this.state.quantity > 1) {
              this.props.decrement()
              this.setState({
                quantity: this.state.quantity - 1,
                price: this.state.price - (this.state.price / this.state.quantity)
              })
            } else {
              this.props.confirm()
            }
          }}>-</QuantityButton>
            {this.state.quantity}
          <QuantityButton onClick={() => {
            console.log(cap)
            if(this.state.quantity < cap) {
              this.props.increment()
              this.setState({
                quantity: this.state.quantity + 1,
                price: this.state.price + (this.state.price / this.state.quantity)
              })
            }
          }}>+</QuantityButton>
        </td>
        <td style={{...equalWidth, textAlign: 'center'}}>${this.state.price.toFixed(2)}</td>
        <td style={{...equalWidth}}>
          <Button
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            onClick={() => this.props.confirm()}
            trash
            width="100%"
            height="2.25em"
            text={<StyledFaIcon customColor={white} color={red} icon={faTrashAlt} style={{width: '35%', height: 'auto'}} />} />
        </td>
      </tr>
    )
  }
}

class DeleteModal extends React.Component {
  render() {
    return (
      <Modal 
        {...(this.props)}
        size="md"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          {this.props.items.length === 0 ? 'No items to delete.' : `Are you sure you want to delete ${this.props.items.length === 1 ? '"' + this.props.items[0].name + '"' : this.props.items.length + ' items'} from your cart?`}
        </Modal.Body>
        <Modal.Footer>
          {this.props.items.length > 0 
            ? (
              <>
                <Button text="Yes" trash width="48%" onClick={() => this.props.remove()} />
                <Button text="No" secondary width="48%" onClick={() => this.props.onHide()} />
              </>
            )
            : <Button text="Close" secondary width="100%" onClick={() => this.props.onHide()} />
          }
          
        </Modal.Footer>
      </Modal>
    )
  }
}

export class CartModal extends React.Component {
  state = {
    deletingItems: [],
    deleteModalVisible: false,
    remove: () => {}
  }
  render() {
    const headerStyle = {
      width: '25%',
      textAlign: 'center'
    }
    return(
      <>
        <Modal
          {...(this.props)}
          centered
          size="lg"
          scrollable
        >
          <Modal.Header closeButton>Cart</Modal.Header>
          <Modal.Body style={{ maxHeight: '65vh' }}>
            <Table hover>
              <thead>
                <tr>
                  <th style={{...headerStyle}}>
                    Thumbnail
                  </th>
                  <th style={{...headerStyle}}>
                    Name
                  </th>
                  <th style={{...headerStyle}}>
                    Quantity
                  </th>
                  <th style={{...headerStyle}}>
                    Price
                  </th>
                  <th style={{...headerStyle}}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <CartContext.Consumer>
                  {({cart, removeFromCart, incrementQuantity, decrementQuantity}) => (
                    cart.map(cartItem => (
                      <CartItem 
                        item={cartItem}
                        confirm={() => this.setState({
                          deleteModalVisible: true,
                          deletingItems: [cartItem],
                          remove: () => {
                            removeFromCart(cartItem.merchId)
                            this.setState({
                              deleteModalVisible: false,
                              deletingItems: []
                            })
                          }
                        })}
                        increment={() => incrementQuantity(cartItem.merchId)}
                        decrement={() => decrementQuantity(cartItem.merchId)}
                      />
                    ))
                  )}
                </CartContext.Consumer>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
            <CartContext.Consumer>
              {({cart, clearCart}) => (
                <>
                  <Button
                    text={'Checkout'}
                    secondary
                    width="48%"
                    muted={cart.length === 0}
                    onClick={cart.length === 0 ? () => {} : this.props.checkout} />
                  <Button 
                    text={'Clear Cart'}
                    trash
                    width="48%"
                    onClick={() => this.setState({
                      deleteModalVisible: true,
                      deletingItems: cart,
                      remove: () => {
                        clearCart()
                        this.setState({
                          deleteModalVisible: false,
                          deletingItems: []
                        })
                      }
                    })} />
                </>
              )}
            </CartContext.Consumer>
          </Modal.Footer>
        </Modal>
        <DeleteModal
          show={this.state.deleteModalVisible}
          onHide={() => this.setState({ deleteModalVisible: false })}
          items={this.state.deletingItems}
          remove={() => this.state.remove()} />
      </>
    )
  }
}