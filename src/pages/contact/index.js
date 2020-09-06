import React from 'react';
import styled from 'styled-components';
import { 
  Container,
  Form, 
  FormGroup, 
  FormLabel, 
  FormControl, 
  FormText,
  Toast,
  FormCheck,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { init, send } from 'emailjs-com';

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
  
  constructor(props) {
    super(props);
    this.state = {
      yourName: "",
      organization: "",
      email: "",
      statement: "",
      toastVisible: false,
      alertVisible: false,
      selected: [],
      recentBeat: beats[0],
      added: true,
      purchasingBeats: false,
      spinnerVisible: false,
    }

    init("user_NhpX6mA3wYfbJ5YRxETqn");
    this.handleChange = this.addBeat.bind(this);

    this.allBeats = [...beats].concat(...projects.filter(project => project.beatTape).map(beatTape => {return beatTape.beats}));
  }

  closeToast = () => {
    this.setState({
      toastVisible: false,
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      spinnerVisible: true,
    })

    send(
      "service_22v4zop", 
      this.state.purchasingBeats ? "template_bjrhf54" : "template_fe1k1ey", 
      {
        name: this.state.yourName,
        organization: this.state.organization,
        email: this.state.email,
        statement: this.state.statement,
        beats: this.selectedToString(),
      })
    .then((result) => {
      console.info(result);
      this.setState({
        yourName: "",
        organization: "",
        email: "",
        statement: "",
        alertVisible: true,
        selected: [],
        toastVisible: false,
        recentBeat: beats[0],
        purchasingBeats: false,
        spinnerVisible: false,
      }, (error) => {
        console.error(error);
        this.setState({
          spinnerVisible: false,
        })
      })
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
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Contact</BannerTitle>
              <BannerCaption>Ask me about my services! I make beats and websites. I also make a mean macaroni necklace.</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 24px'}}>
          <PageSectionTitle>Enter Your Information</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
          <PageSectionInfo>Serious inquiries only, please.</PageSectionInfo>
          <Container fluid style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0}}>
            <HoveringForm>
              <Form onSubmit={(e) => this.onSubmit(e)} style={{backgroundColor: '#707070', color: '#FFFFFF', padding: 24, width: '100%'}}>
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
                  <FormLabel>Organization (If Applicable)</FormLabel>
                  <FormControl 
                    name='organization' 
                    value={this.state.organization} 
                    onChange={(e) => this.setState({organization: e.target.value})}
                    type={'text'} 
                    placeholder={'Organization'} 
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
                    onChange={() => this.setState({purchasingBeats: !this.state.purchasingBeats})}
                    checked={this.state.purchasingBeats}
                  />
                  {
                    !this.state.purchasingBeats 
                    ? <FormText>Only select this if you're purchasing a beat that is on the <a href="/beats" style={{ color: '#29B3F1' }}>beats page</a>. If you want a custom beat (regardless of if you want to purchase one from this website), please mention that in the "State Your Business" section.</FormText>
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
                            <option key={beatTape.id} value={beat.id}>{beat.title}</option>
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
                        backgroundColor: '#040B30',
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
                            cover={beat.cover} 
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
                <Button submit text={'Submit'} />
                <br />
                {this.state.spinnerVisible && (
                  <Spinner animation="border" style={{margin: '2% 0%', color: '#29B3F1'}} />
                )}
                <Alert 
                  style={{width: '100%', margin: '2% 0%'}} 
                  variant={'success'} 
                  show={this.state.alertVisible}
                  onClose={() => this.setState({alertVisible: false})} 
                  dismissible
                >
                  <Alert.Heading>Submitted Successfuly!</Alert.Heading>
                  Thank you for contacting me! I will get back to you as soon as I can.
                </Alert>
              </Form>
            </HoveringForm>
          </Container>
        </Container>
      </Container>
    );
  }
}