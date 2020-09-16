import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Toast from 'react-bootstrap/Toast';
import FormCheck from 'react-bootstrap/FormCheck';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { init, send } from 'emailjs-com';
import { Helmet } from 'react-helmet';
import { ReCAPTCHA } from 'react-google-recaptcha';

import banner from './assets/banner.jpg';
import Button from '../../components/button';
import BeatCard from './components/beatCard';
import { beats, projects } from '../../constants/music';

import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
  PageSectionInfo,
} from '../../constants/styled-components';
import { darkBlue, lightBlue, silver, white } from '../../constants/colors';

const HoveringForm = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: none;
  transition: box-shadow 0.5s;
  width: 50%;
  margin: 2% 0%;

  @media (max-width: 740px) {
    width: 100%;
  }

  &:hover {
    box-shadow: 0px 10px 10px;
  }
`

export default class Contact extends React.Component {

  service = process.env.REACT_APP_EMAILJS_SERVICE;
  username = process.env.REACT_APP_EMAILJS_ID;
  templates = [process.env.REACT_APP_EMAILJS_TEMPLATE_BEATS, process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT];
  recaptchaRef = React.createRef();
  
  constructor(props) {
    super(props);
    this.state = {
      yourName: "",
      email: "",
      statement: "",
      toastVisible: false,
      successAlertVisible: false,
      failureAlertVisible: false,
      selected: [],
      recentBeat: beats[0],
      added: true,
      purchasingBeats: false,
      spinnerVisible: false,
      submitVisible: false,
    }

    init(this.username);
    this.handleChange = this.addBeat.bind(this);

    this.allBeats = [...beats].concat(...projects.filter(project => project.beatTape).map(beatTape => {return beatTape.beats}));
  }

  closeToast = () => {
    this.setState({
      toastVisible: false,
    })
  }

  verify = () => {
    alert("Wassup")
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      spinnerVisible: true,
      successAlertVisible: false,
      failureAlertVisible: false,
    })

    send(
      this.service, 
      this.state.purchasingBeats ? this.templates[0] : this.templates[1], 
      {
        name: this.state.yourName,
        email: this.state.email,
        statement: this.state.statement,
        beats: this.selectedToString(),
      })
    .then((result) => {
      console.info(result);
      this.setState({
        yourName: "",
        email: "",
        statement: "",
        successAlertVisible: true,
        selected: [],
        toastVisible: false,
        recentBeat: beats[0],
        purchasingBeats: false,
        spinnerVisible: false,
      }, (error) => {
        if(error) {
          console.info(error);
          this.setState({
            spinnerVisible: false,
            failureAlertVisible: true,
          })
        }
      })
    }).catch((error) => {
      if(error) {
        console.error(error);
        this.setState({
          spinnerVisible: false,
          failureAlertVisible: true,
        });
      }
    })
    
  }

  addBeat = (event) => {
    const value = event.target.value;
    if(value !== "") {
      let newSelected = this.state.selected;
      const addedBeat = this.findBeat(value);
      if(!this.beatSelected(addedBeat)){
        newSelected.push(addedBeat);
      }
      this.setState({
        selected: newSelected,
        toastVisible: true,
        recentBeat: addedBeat,
        added: true,
      });
    }
  }

  removeBeat = (id) => {
    const ndx = this.findSelectedBeat(id);
    const newSelected = this.state.selected;
    const removedBeat = newSelected.splice(ndx, 1)[0];
    this.setState({
      selected: newSelected,
      toastVisible: true,
      recentBeat: removedBeat,
      added: false,
    })
  }

  findBeat = (id) => {
    return this.allBeats.find(beat => beat.id === id);
  }

  findSelectedBeat = (id) => {
    return this.state.selected.findIndex(beat => beat.id === id);
  }

  beatSelected = (beat) => {
    return this.state.selected.find(item => item.id === beat.id);
  }

  selectedToString = () => {
    let selected = [];
    this.state.selected.map(beat => selected.push(beat.title));

    return selected;
  }

  render () {
    return (
      <Container fluid style={{padding: 0}}>
        <Helmet>
          <title>Contact - Isaiah Bullard</title>
          <meta name="description" content="A form to contact Isaiah Bullard" />
        </Helmet>
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Contact</BannerTitle>
              <BannerCaption>Fill out the form and we can have a conversation about the thing that you want to have a conversation about.</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 24px'}}>
          <PageSectionTitle>Enter Your Information</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <PageSectionInfo>Serious inquiries only, please.</PageSectionInfo>
          <Container fluid style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0}}>
            <HoveringForm>
              <Form onSubmit={(e) => this.onSubmit(e)} style={{backgroundColor: silver, color: white, padding: 24, width: '100%'}}>
                <FormGroup>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl 
                    name='yourName' 
                    value={this.state.yourName} 
                    onChange={(e) => this.setState({yourName: e.target.value})}
                    type={'text'} 
                    placeholder={'Your Name'} 
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl 
                    name='email' 
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} 
                    type={'email'} 
                    placeholder={'example@example.com'} 
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormCheck 
                    name="purchasingBeats" 
                    type={'checkbox'} 
                    label="I'm purchasing a beat" 
                    onChange={() => this.setState({
                      purchasingBeats: !this.state.purchasingBeats,
                      toastVisible: false,
                    })}
                    checked={this.state.purchasingBeats}
                  />
                  {
                    !this.state.purchasingBeats 
                    ? <FormText>Only select this if you're purchasing a beat that is on the <a href="/beats" style={{ color: lightBlue }}>beats page</a>. If you want a custom beat (regardless of if you want to purchase one from this website), please mention that in the "State Your Business" section.</FormText>
                    : <FormText>If you want a custom beat (regardless of if you want to purchase one from this website), please mention that in the "State Your Business" section.</FormText>
                  }
                </FormGroup>
                {this.state.purchasingBeats && (
                  <FormGroup>
                    <FormLabel>Select Beats to Purchase</FormLabel>
                    <FormControl 
                      name='beatList' 
                      as={'select'} 
                      onChange={this.handleChange} 
                      value=""
                      required={this.state.selected.length === 0}
                    >
                      <option value="" />
                      {projects.filter((project) => project.beatTape).map((beatTape) => (
                        <optgroup key={beatTape.id} label={beatTape.title}>
                          {beatTape.beats.filter((beat) => !this.beatSelected(beat)).map((beat) => (
                            <option key={beat.id} value={beat.id}>{beat.title}</option>
                          ))}
                        </optgroup>
                      ))}
                      {beats.filter((beat) => !this.beatSelected(beat)).map((beat) => (
                        <option key={beat.id} value={beat.id}>{beat.title}</option>
                      ))}
                    </FormControl>
                    <FormText>
                      Please only select beats if you intend to purchase them. All beats are sold exclusively and on a first-come-first-serve basis.
                    </FormText>
                    <Toast 
                      style={{ 
                        marginTop: 5, 
                        marginBottom: 5,
                        backgroundColor: darkBlue,
                      }}
                      show={this.state.toastVisible}
                      onClose={() => this.closeToast()}
                    >
                      <Toast.Header>
                        <strong>Beat {this.state.added ? "added" : "removed"}!</strong>
                      </Toast.Header>
                      <Toast.Body>
                        {this.state.recentBeat.title} has been {this.state.added ? "added" : "removed"}.
                      </Toast.Body>
                    </Toast>
                    {this.state.selected.length > 0 && (
                      <Container 
                        fluid 
                        style={{ 
                          display: 'flex', 
                          flexDirection: 'row', 
                          flexWrap: 'wrap', 
                          padding: 10, 
                          width: '100%' 
                        }}
                      >
                        {this.state.selected.map((beat) => (
                          <BeatCard 
                            key={beat.id}
                            name={beat.title} 
                            cover={beat.beatTapeId ? projects.find(project => project.id === beat.beatTapeId).cover : beat.cover} 
                            onClick={() => this.removeBeat(beat.id)} 
                          />
                        ))}
                      </Container>
                    )}
                  </FormGroup>
                )}
                <FormGroup>
                  <FormLabel>State Your Business</FormLabel>
                  <FormControl 
                    name='statement' 
                    value={this.state.statement} 
                    onChange={(e) => this.setState({statement: e.target.value})}
                    as={'textarea'} 
                    rows={15} 
                    required
                  />
                </FormGroup>
                <ReCAPTCHA 
                  onChange={this.verify} 
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY} 
                />
                <Button submit text={'Submit'} />
                <br />
                {this.state.spinnerVisible && (
                  <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue}} />
                )}
                <Alert 
                  style={{width: '100%', margin: '2% 0%'}} 
                  variant={'success'} 
                  show={this.state.successAlertVisible}
                  onClose={() => this.setState({successAlertVisible: false})} 
                  dismissible
                >
                  <Alert.Heading>Submitted Successfuly!</Alert.Heading>
                  Thank you for contacting me! I will get back to you as soon as I can.
                </Alert>
                <Alert 
                  style={{width: '100%', margin: '2% 0%'}} 
                  variant={'danger'} 
                  show={this.state.failureAlertVisible}
                  onClose={() => this.setState({failureAlertVisible: false})} 
                  dismissible
                >
                  <Alert.Heading>Sumbission Failed.</Alert.Heading>
                  Please try again.
                </Alert>
              </Form>
            </HoveringForm>
          </Container>
        </Container>
      </Container>
    );
  }
}