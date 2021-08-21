import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Menu from './components/menu';
import Footer from './components/footer';
import { CartContext, CartButton, CartModal } from './components/cart';
import Checkout, { CheckoutConfirmation } from './components/checkout';
import Orders, { OrdersButton } from './components/orders'

import Home from './pages/home/';
import Projects from './pages/projects/';
import Beats from './pages/beats/';
import Merchandise from './pages/merchandise/';
import Contact from './pages/contact/';
import NotFound from './pages/notFound/';
import Helmet from 'react-helmet';

/**
 * This app is the informational website for Isaiah Bullard. It contains
 * information on his projects, including, but not limited to, albums, beat
 * tapes, and production credits. It also contains information on beat the
 * beats that he currently has for sale, available for purchase through the
 * contact page of the site. The merchandise page is meant to display any
 * available merchandise for the "Isaiah Bullard" brand, or any other brands
 * affiliated with Isaiah Bullard. 
 * 
 * @author Isaiah Bullard
 * @version 1.0.0
 */
export default class App extends React.Component {
  addToCart = (merchId, name, price, thumbnail, quantity, cap, weight, size) => {
    let cart = [...this.state.cartState.cart]
    const existingItemId = cart.findIndex(cartItem => cartItem.merchId === merchId && cartItem.size.id === size.id)
    
    if(existingItemId === -1) {
      cart.push({
        merchId: merchId,
        name: name,
        price: price,
        thumbnail: thumbnail,
        quantity: quantity,
        cap: cap,
        weight: weight,
        size: size && size.id !== '' ? {
          id: size.id,
          name: size.name,
        } : undefined
      })
    } else {
      cart[existingItemId].quantity += quantity
      cart[existingItemId].price += price
    }

    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: cart,
      }
    })

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  removeFromCart = (merchId) => {
    let cart = [...this.state.cartState.cart]
    const removedId = cart.findIndex(cartItem => cartItem.merchId === merchId)
    cart.splice(removedId, 1)

    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: cart,
      }
    })

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  clearCart = () => {
    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: [],
      }
    })

    window.localStorage.setItem('cart', "[]")
  }

  incrementQuantity = (merchId) => {
    let cart = [...this.state.cartState.cart]
    let itemId = cart.findIndex(cartItem => cartItem.merchId === merchId)
    cart[itemId].price += cart[itemId].price / cart[itemId].quantity
    cart[itemId].quantity += 1

    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: cart,
      }
    })

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  decrementQuantity = (merchId) => {
    let cart = [...this.state.cartState.cart]
    let itemId = cart.findIndex(cartItem => cartItem.merchId === merchId)
    cart[itemId].price -= cart[itemId].price / cart[itemId].quantity
    cart[itemId].quantity -= 1

    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: cart,
      }
    })

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  state = {
    cartState: {
      cart: [],
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      clearCart: this.clearCart,
      incrementQuantity: this.incrementQuantity,
      decrementQuantity: this.decrementQuantity,
    },
    cartModalVisible: false,
    checkoutVisible: false,
    confirmVisible: false,
    confirmedOrder: {
      receiptUrl: '',
      customer: {
        firstName: '',
        lastName: '',
        email: '',
      },
      totalCost: 0,
      shippingRate: 0
    },
    ordersVisible: false,
  }

  showCart = () => {
    this.setState({
      cartModalVisible: true
    })
  }

  hideCart = () => {
    this.setState({
      cartModalVisible: false
    })
  }

  showCheckout = () => {
    this.setState({
      checkoutVisible: true
    })
  }

  hideCheckout = () => {
    this.setState({
      checkoutVisible: false
    })
  }

  confirmOrder = (order) => {
    this.clearCart()
    this.setState({
      confirmVisible: true,
      confirmedOrder: order
    })
  }

  hideConfirm = () => {
    this.setState({
      confirmVisible: false,
      confirmedOrder: {
        receiptUrl: '',
        customer: {
          firstName: '',
          lastName: '',
        },
        totalCost: 0,
        shippingRate: 0
      },
    })
  }

  showOrders = () => {
    this.setState({
      ordersVisible: true
    })
  }

  hideOrders = () => {
    this.setState({
      ordersVisible: false
    })
  }

  componentDidMount = () => {
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    if (!cart) {
      window.localStorage.setItem('cart', '[]')
      cart = []
    }

    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: cart,
      }
    })
  }

  render () {
    return (
      <CartContext.Provider value={this.state.cartState}>
        <Helmet>
          <script src="https://sandbox.web.squarecdn.com/v1/square.js"></script>
        </Helmet>
        <Container fluid style={{padding: 0, display: 'flex', flexDirection: 'column'}}>
          <div style={{zIndex: 0}}>
            <Menu />
            <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route path='/projects' component={Projects} />
                <Route path='/beats' component={Beats} />
                <Route path={['/merch', '/merchandise']} component={Merchandise} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </Router>
            <Footer />
          </div>
          <CartButton onClick={() => this.showCart()} style={{zIndex: 1, bottom: 0, right: 0, position: 'fixed'}} />
          <OrdersButton onClick={() => this.showOrders()} style={{zIndex: 1, bottom: 0, position: 'fixed'}} />
          <CartModal show={this.state.cartModalVisible} onHide={() => this.hideCart()} checkout={() => {
            this.hideCart()
            this.showCheckout()
          }} />
          <Checkout show={this.state.checkoutVisible} onHide={() => this.hideCheckout()} cart={() => {
            this.hideCheckout()
            this.showCart()
          }} confirm={(order) => {
            this.hideCheckout()
            this.confirmOrder(order)
          }} />
          <CheckoutConfirmation show={this.state.confirmVisible} onHide={() => this.hideConfirm()} order={this.state.confirmedOrder} />
          <Orders show={this.state.ordersVisible} onHide={() => this.hideOrders()} />
        </Container>
      </CartContext.Provider>
    );
  }
}