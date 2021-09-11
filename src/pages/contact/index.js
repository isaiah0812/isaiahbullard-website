import React from 'react';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Toast from 'react-bootstrap/Toast';
import FormCheck from 'react-bootstrap/FormCheck';
import Spinner from 'react-bootstrap/Spinner';
import { init, send } from 'emailjs-com';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';

import Button from '../../components/button';

import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
  PageSectionInfo,
} from '../../components/styled-components';
import { darkBlue, lightBlue, silver, white } from '../../constants/colors';
import { pageContainer } from '../../constants/styles';

import banner from './assets/banner.jpg';

import BeatCard from './components/beatCard';

/**
 * The container that gives the form it's hover affect.
 * @constant
 * @name HoveringForm
 * @type {import('styled-components').StyledComponent}
 * @example <HoveringForm><Form>...</Form><HoveringForm>
 */
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

/**
 * The Contact page, containing a form that sends a message to Isaiah Bullard
 * @name Contact
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Contact />
 */
export default class Contact extends React.Component {

  /**
   * The emailjs service id
   */
  service = process.env.REACT_APP_EMAILJS_SERVICE;
  /**
   * The user id for emailjs
   */
  username = process.env.REACT_APP_EMAILJS_ID;
  /**
   * The options of templates to use in the contact form.
   */
  templates = [process.env.REACT_APP_EMAILJS_TEMPLATE_BEATS, process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT];

  state = {
    yourName: "",
    email: "",
    statement: "",
    toastVisible: false,
    successAlertVisible: false,
    failureAlertVisible: false,
    selected: [],
    recentBeat: {
      title: "",
      cover: "",
      id: "",
      youtube: "",
      keySignature: "",
      tempo: 0,
      sold: false
    },
    added: true,
    purchasingBeats: false,
    spinnerVisible: false,
    beatsLoaded: false,
    beatTapesLoaded: false,
    beats: [],
    beatTapes: [],
    beatsError: null,
    beatTapesError: null,
    allBeats: []
  }

  componentDidMount() {
    init(this.username)
    this.handleChange = this.addBeat.bind(this)

    fetch(`${process.env.REACT_APP_API_URL}/beats`)
      .then(res => res.json())
      .then((beats) => {
        this.setState({
          beatsLoaded: true,
          beats: beats,
          allBeats: this.state.allBeats.concat(beats)
        })
      }, (error) => {
        this.setState({
          beatsLoaded: true,
          error: error
        })
      })
    
    fetch(`${process.env.REACT_APP_API_URL}/projects?beatTape=true`)
      .then(res => res.json())
      .then((beatTapes) => {
        this.setState({
          beatTapesLoaded: true,
          beatTapes: beatTapes,
          allBeats: this.state.allBeats.concat(...beatTapes.map(beatTape => beatTape.beats))
        })
      }, (error) => {
        this.setState({
          beatTapesLoaded: true,
          error: error
        })
      })
  }

  /**
   * Closes the toast that shows when the "X" is clicked
   * 
   * @name closeToast
   * @returns
   */
  closeToast = () => {
    this.setState({
      toastVisible: false,
    })
  }
  
  /**
   * The set of commands that sends the message to the server once the contact form is submitted.
   * 
   * @param {Event} e the event that occurs when the submit button is clicked
   * @returns
   */
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
        beats: this.selectedToString(), // Doesn't matter which template it is.
      })
    .then((result) => {
      this.setState({
        yourName: "",
        email: "",
        statement: "",
        successAlertVisible: true,
        selected: [],
        toastVisible: false,
        recentBeat: {
          title: "",
          cover: "",
          id: "",
          youtube: "",
          keySignature: "",
          tempo: 0,
          sold: false
        },
        purchasingBeats: false,
        spinnerVisible: false,
      }, (error) => {
        if(error) {
          this.setState({
            spinnerVisible: false,
            failureAlertVisible: true,
          })
        }
      })
    }).catch((error) => {
      if(error) {
        this.setState({
          spinnerVisible: false,
          failureAlertVisible: true,
        });
      }
    })
    
  }

  /**
   * Displays a toast and adds a new beat to the selected beat list.
   * @param {Event} event the event that contains the selected beat
   * @returns
   */
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

  /**
   * Removes a beat from the selected beat list and displays a toast
   * @param {string} id 
   * @returns
   */
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

  /**
   * Gets one beat by id
   * @param {string} id 
   * @returns {object} the beat with a matching id, or undefined if not found
   */
  findBeat = (id) => {
    return this.state.allBeats.find(beat => beat.id === id);
  }

  /**
   * Gets a selected beat's index in the selected array by id
   * @param {string} id 
   * @returns {number} the id of a beat with a matching id, or -1 if not found
   */
  findSelectedBeat = (id) => {
    return this.state.selected.findIndex(beat => beat.id === id);
  }

  /**
   * Finds a beat in the selected beats array
   * @param {object} beat 
   * @returns {object} the beat in the selected beat array if found, or undefined if not found
   */
  beatSelected = (beat) => {
    return this.state.selected.find(item => item.id === beat.id);
  }

  /**
   * Creates a string of the names of the beats selected when sending an email.
   * @returns {string[]} array of selected beat's names
   */
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
        <Container fluid style={{...pageContainer}}>
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
                      {this.state.beatsLoaded && this.state.beatTapesLoaded ? (
                        <>
                          <option value="">Select one...</option>
                          {this.state.beatTapes.map((beatTape) => (
                            <optgroup key={beatTape.id} label={beatTape.title}>
                              {beatTape.beats.filter((beat) => !this.beatSelected(beat)).map((beat) => (
                                <option key={beat.id} value={beat.id}>{beat.title}</option>
                              ))}
                            </optgroup>
                          ))}
                          {this.state.beats.filter((beat) => !this.beatSelected(beat)).map((beat) => (
                            <option key={beat.id} value={beat.id}>{beat.title}</option>
                          ))}
                        </>
                      ) : (
                        <option>Loading...</option>
                      )}
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
                            cover={beat.beatTapeId ? this.state.beatTapes.find(beatTapes => beatTapes.id === beat.beatTapeId).cover : beat.cover} 
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
                <FormGroup>
                  <ReCAPTCHA 
                    sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  />
                  <FormText>You must verify before submitting the form.</FormText>
                </FormGroup>
                <Button submit text={'Submit'} />
                <br />
                {this.state.spinnerVisible && (
                  <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue}} />
                )}
                {/* Success Alert */}
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
                {/* Failure Alert */}
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