import React from 'react';
import Modal from 'react-bootstrap/Modal';
import MerchSlides from './merchSlides';
import Markdown from 'markdown-to-jsx';
import Button from '../../../components/button';
import FormControl from 'react-bootstrap/FormControl';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { CartContext } from '../../../components/cart';
import { StyledModalSection } from '../../../components/styled-components';

export default class MerchModal extends React.Component {
  state = {
    quantity: 1,
    totalCost: this.props.merch.price !== undefined && this.props.merch.price !== null ? this.props.merch.price : this.props.merch.sizes[0].price,
    size: this.props.merch.sizes ? this.props.merch.sizes[0] : { price: 0, pics: [], quantity: 0, id: '' },
    price: this.props.merch.price !== undefined && this.props.merch.price !== null ? this.props.merch.price : this.props.merch.sizes[0].price,
    weight: this.props.merch.weight ? this.props.merch.weight : this.props.merch.sizes[0].weight,
    cap: this.props.merch.quantity ? this.props.merch.quantity : this.props.merch.sizes[0].quantity,
    pics: this.props.merch.pics ? this.props.merch.pics : this.props.merch.sizes[0].pics
  }

  increment = () => {
    this.setState({
      quantity: parseInt(this.state.quantity) + 1, // paresInt ensures that it is an integer, so the " + 1" isn't seen as a string concatenation
      totalCost: (parseInt(this.state.quantity) + 1) * this.state.price
    })
  }

  decrement = () => {
    this.setState({
      quantity: this.state.quantity - 1,
      totalCost: (this.state.quantity - 1) * this.state.price
    })
  }

  reset = () => {
    this.setState({
      quantity: 1,
      totalCost: this.props.merch.price !== undefined && this.props.merch.price !== null ? this.props.merch.price : this.props.merch.sizes[0].price,
      size: this.props.merch.sizes ? this.props.merch.sizes[0] : { price: 0, pics: [], quantity: 0, id: '' },
      price: this.props.merch.price !== undefined && this.props.merch.price !== null ? this.props.merch.price : this.props.merch.sizes[0].price,
      weight: this.props.merch.weight ? this.props.merch.weight : this.props.merch.sizes[0].weight,
      cap: this.props.merch.quantity ? this.props.merch.quantity : this.props.merch.sizes[0].quantity,
      pics: this.props.merch.pics ? this.props.merch.pics : this.props.merch.sizes[0].pics
    })
  }

  changeSize = (size) => {
    this.setState({
      totalCost: size.price * this.state.quantity,
      size: size,
      price: size.price,
      weight: size.weight,
      cap: size.quantity,
      pics: size.pics
    })
  }

  render() {
    const { id, name, description, thumbnail, sizes } = this.props.merch
    return (
      <Modal 
        {...(this.props)}
        centered
        size="lg"
        scrollable
        onShow={() => this.reset()}
      >
        <Modal.Header closeButton>
          {name}
        </Modal.Header>
        <Modal.Body style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', maxHeight: '65vh'}}>
          <StyledModalSection sticky>
            <MerchSlides pics={this.state.pics} />
          </StyledModalSection>
          <StyledModalSection style={{height: '100%'}}>
            <h2>{name}</h2>
            <h5><b>Price:</b> {this.state.price === 0 ? 'FREE!' : '$' + this.state.price.toFixed(2)}</h5>
            {sizes && (
              <React.Fragment>
                <h5 style={{ display: 'inline', margin: '1.5% 0%' }}><b>Size: </b></h5>
                <FormControl
                  as={'select'}
                  value={this.state.size.id}
                  style={{ width: '7rem', display: 'inline', margin: '1.5% 0%' }}
                  onChange={e => {
                    const size = sizes.find(size => size.id === e.target.value)
                    this.changeSize(size)
                  }}
                >
                  {sizes.map(size => <option value={size.id}>{size.name}</option>)}
                </FormControl>
                <br />
              </React.Fragment>
            )}
            <h5 style={{display: 'inline'}}><b>Quantity: </b></h5>
            <Button
              text="-"
              secondary
              width="2.5em"
              height="2.5em"
              fontSize="1em"
              muted={this.state.quantity < 2 || isNaN(this.state.quantity)}
              onClick={() => {
                if(this.state.quantity > 1) {
                  this.decrement()
                }
              }}
            />
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    {this.state.quantity < 1 && "Okay, you have to get at least 1."}
                    {this.state.quantity > this.state.cap && "The limit does exist, and the limit is 20. You can't get more than 20."}
                    {isNaN(this.state.quantity) && "The quantity should be a number."}
                  </Tooltip>
                }
                show={this.state.quantity > this.state.cap || this.state.quantity < 1 || isNaN(this.state.quantity)}
              >
                <FormControl 
                  value={this.state.quantity}
                  onChange={(e) => {
                    this.setState({ quantity: e.target.value, totalCost: e.target.value * this.state.price })
                  }}
                  style={{
                    width: this.state.quantity < 1 || this.state.quantity > this.state.cap || isNaN(this.state.quantity) ? '5em' : '3em',
                    textAlign: 'center',
                    display: 'inline',
                    margin: '0% 2%'
                  }}
                  isInvalid={this.state.quantity < 1 || this.state.quantity > this.state.cap || isNaN(this.state.quantity)}
                />
              </OverlayTrigger>
            <Button
              text="+"
              secondary
              width="2.5em"
              height="2.5em"
              fontSize="1em"
              muted={this.state.quantity > this.state.cap - 1 || isNaN(this.state.quantity)}
              onClick={() => {
                if(this.state.quantity === '') {
                  this.reset()
                } else if(this.state.quantity < this.state.cap) {
                  this.increment()
                }
              }}
            />
            <Markdown options={{
              forceBlock: true,
              overrides: {
                p: {
                  props: {
                    style: {
                      lineHeight: "normal"
                    }
                  }
                }
              }
            }}>{description}</Markdown>
          </StyledModalSection>
        </Modal.Body>
        <Modal.Footer>
          <CartContext.Consumer>
            {({addToCart}) => (
              <Button
                text={`Add to Cart${this.state.quantity > 0 && this.state.quantity < this.state.cap + 1 ? ` ($${this.state.totalCost.toFixed(2)})`: ``}`}
                secondary
                fontSize="1.1em"
                width="100%"
                muted={this.state.quantity > this.state.cap || this.state.quantity < 1 || isNaN(this.state.quantity)}
                onClick={() => {
                  addToCart(
                    id,
                    name,
                    this.state.totalCost,
                    thumbnail,
                    this.state.quantity,
                    this.state.cap,
                    this.state.weight,
                    this.state.size
                  )
                  this.props.added(this.state.quantity)
                }}
              />
            )}
          </CartContext.Consumer>
        </Modal.Footer>
      </Modal>
    )
  }
}