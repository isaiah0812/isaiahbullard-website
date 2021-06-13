import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import Menu from './components/menu';
import Footer from './components/footer';
import { CartContext, CartButton, CartModal } from './components/cart';
import Checkout from './components/checkout';
import { ProfileButton, ProfileContext, ProfileModal } from './components/profile';

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
class App extends React.Component {
  addToCart = (merchId, name, price, thumbnail, quantity, cap) => {
    let cart = [...this.state.cartState.cart]
    const existingItemId = cart.findIndex(cartItem => cartItem.merchId === merchId)
    
    if(existingItemId === -1) {
      cart.push({
        merchId: merchId,
        name: name,
        price: price,
        thumbnail: thumbnail,
        quantity: quantity,
        cap: cap
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
    profileState: {},
    cartModalVisible: false,
    checkoutVisible: false,
    profileModalVisible: false,
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

  showProfile = () => {
    this.setState({
      profileModalVisible: true
    })
  }

  hideProfile = () => {
    this.setState({
      profileModalVisible: false
    })
  }

  retrieveProfile = () => {
    const { user } = this.props.auth0;
    const api = axios.create();
    const sub = user.sub;

    if (this.profileEmpty()) {
      api.get(`${process.env.REACT_APP_API_URL}/customers/${sub.substring(sub.indexOf("|") + 1)}`)
        .then(result => result.data).then((customer) => {
          let cart = JSON.parse(window.localStorage.getItem('cart'))
          cart.push(...customer.cart)
          window.localStorage.setItem('cart', JSON.stringify(cart))
  
          const profile = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            squareId: customer.squareId
          }
          window.localStorage.setItem('profile', JSON.stringify(profile))
  
          this.setState({
            profileState: profile,
            cartState: {
              ...(this.state.cartState),
              cart: cart
            }
          })
        }).catch((customerError) => {
          console.error(customerError)
        })
    }

  }

  profileEmpty = () => {
    return JSON.stringify(this.state.profileState) === "{}"
  }

  componentDidMount = () => {
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    if (!cart) {
      window.localStorage.setItem('cart', '[]')
      cart = []
    }

    let profile = JSON.parse(window.localStorage.getItem('profile'))
    if (!profile) {
      window.localStorage.setItem('profile', '{}')
      profile = {}
    }

    this.setState({
      cartState: {
        ...(this.state.cartState),
        cart: cart,
      },
      profileState: profile
    })
  }

  componentDidUpdate = () => {
    const { isAuthenticated } = this.props.auth0;

    if(isAuthenticated && this.profileEmpty()) {
      this.retrieveProfile()
    }
  }

  render () {
    const { isAuthenticated } = this.props.auth0
    return (
      <ProfileContext.Provider value={this.state.profileState}>
        <CartContext.Provider value={this.state.cartState}>
          <Helmet>
            <script src="https://sandbox.web.squarecdn.com/v1/square.js"></script>
          </Helmet>
          {isAuthenticated && this.retrieveProfile()}
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
            <ProfileButton onClick={() => this.showProfile()} style={{zIndex: 1, bottom: 0, left: 0, position: 'fixed'}} />
            <CartModal show={this.state.cartModalVisible} onHide={() => this.hideCart()} checkout={() => {
              this.hideCart()
              this.showCheckout()
            }} />
            <Checkout show={this.state.checkoutVisible} onHide={() => this.hideCheckout()} cart={() => {
              this.hideCheckout()
              this.showCart()
            }} />
            <ProfileModal show={this.state.profileModalVisible} onHide={() => this.hideProfile()} />
          </Container>
        </CartContext.Provider>
      </ProfileContext.Provider>
    );
  }
}

export default withAuth0(App)