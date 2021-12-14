import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { Helmet } from 'react-helmet';

import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
} from '../../components/styled-components';
import { pageContainer } from '../../constants/styles';

import banner from './assets/banner.jpg';

import MerchCard from './components/merchCard'
import MerchModal from './components/merchModal';

/**
 * The Merchandise page, yet to be implemented.
 * @name Merchandise
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Merchandise />
 */
export default class Merchandise extends React.Component {
  state = {
    showModal: false,
    addedToCart: false,
    addedItemName: '',
    addedItemQuantity: 0,
    merch: []
  }

  setAddedAlertProps = (quantity) => {
    this.setState({
      showModal: false,
      addedToCart: true,
      addedItemName: this.state.selected.name,
      addedItemQuantity: quantity
    }, () => {
      setTimeout(() => this.setState({addedToCart: false}), 5000)
    })
  }

  componentDidMount = () => {
    fetch(`${process.env.REACT_APP_API_URL}/merch`)
      .then(merchFulfilled => merchFulfilled.json())
      .then(merchResult => {
        this.setState({
          merch: merchResult,
          selected: merchResult[0]
        })
      })
  }

  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <Helmet>
          <title>Merchandise - Isaiah Bullard</title>
          <meta name="description" content="Merchandise store for Isaiah Bullard. To be implemented." />
        </Helmet>
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Merchandise</BannerTitle>
              <BannerCaption>Don't think of it as Zae worship. Think of it as...loving me unconditionally by giving me money in exchange for clothes.</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Alert
          variant="success"
          show={this.state.addedToCart}
          dismissible
          onClose={() => this.setState({ addedToCart: false })}
        >
          Added {this.state.addedItemQuantity} {`${this.state.addedItemName}${this.state.addedItemQuantity === 1 ? '' : 's'}`} to cart.
        </Alert>
        <Container style={{...pageContainer, flexDirection: 'row', flexWrap: 'wrap', minHeight: '55vh'}}>
          {this.state.merch.map((m) => <MerchCard merch={m} onClick={() => this.setState({showModal: true, selected: m})} />)}
        </Container>
        {this.state.selected && (
          <MerchModal
            merch={this.state.selected}
            show={this.state.showModal}
            onHide={() => this.setState({showModal: false})}
            added={this.setAddedAlertProps} />
        )}
      </Container>
    );
  }
}