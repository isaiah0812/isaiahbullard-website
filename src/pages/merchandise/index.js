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
import merch from '../../constants/merch';

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
    selected: merch[0],
    addedToCart: false,
    addedItemName: '',
    addedItemQuantity: 0
  }

  setAddedAlertProps = (quantity) => {
    this.setState({
      showModal: false,
      addedToCart: true,
      addedItemName: this.state.selected.name,
      addedItemQuantity: quantity
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
              <BannerCaption>Merchandise coming soon.</BannerCaption>
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
        <Container style={{...pageContainer, flexDirection: 'row', flexWrap: 'wrap'}}>
          {merch.map((m) => <MerchCard merch={m} onClick={() => this.setState({showModal: true, selected: m})} />)}
        </Container>
        <MerchModal
          merch={this.state.selected}
          show={this.state.showModal}
          onHide={() => this.setState({showModal: false})}
          added={this.setAddedAlertProps} />
      </Container>
    );
  }
}