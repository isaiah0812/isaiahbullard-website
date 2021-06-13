import React from 'react'
import Button from './button'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { white, lightBlue } from '../constants/colors'
import { StyledFaIcon } from './styled-components';
import Modal from 'react-bootstrap/Modal';
import { useAuth0 } from '@auth0/auth0-react'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import { CartContext } from './cart';

export const ProfileContext = React.createContext({
  profile: {}
})

export class ProfileButton extends React.Component {
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

export const ProfileModal = (props) => {
  const { loginWithPopup, isAuthenticated, logout, isLoading, user } = useAuth0()

  return (
    <ProfileContext.Consumer>
      {({firstName, email}) => (
        <Modal
          {...(props)}
          centered
          size="lg"
          scrollable
        >
          <Modal.Header closeButton>
            {isAuthenticated ? `${firstName}'s Profile (${email})` : 'Profile'}
          </Modal.Header>
          <Modal.Body style={{display: 'flex', justifyContent: 'center'}}>
            {isLoading ? <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue}} /> : isAuthenticated
              ? (
                <React.Fragment style={{width: '100%'}}>
                  <Container fluid style={{padding: 0, width: '50%'}}>
                    {user.name}
                  </Container>
                  <Container fluid style={{padding: 0, width: '50%'}}>
                    {user.email}
                  </Container>
                </React.Fragment>
              ) : (
                <Button text="Login/Sign Up" onClick={() => loginWithPopup()} width="90%" secondary />
              )
            }
          </Modal.Body>
          <Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
            {isAuthenticated && 
              <CartContext.Consumer>
                {({clearCart}) => (
                  <Button text="Logout" onClick={() => {
                    window.localStorage.removeItem('profile')
                    clearCart()
                    logout()
                  }} width="90%" secondary />
                )}
              </CartContext.Consumer>
            }
          </Modal.Footer>
        </Modal>
      )}
    </ProfileContext.Consumer>
  )
}