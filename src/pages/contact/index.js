import React from 'react';
import styled from 'styled-components';
import banner from './assets/banner.jpg';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from '../../components/button';
import { useForm } from 'react-hook-form';
import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
} from '../../constants/styled-components';

const HoveringForm = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: none;
  transition: box-shadow 0.5s;
  width: 40%;

  &:hover {
    box-shadow: 0px 10px 10px;
  }
`

export default function Contact () {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    const newLineRegex = /\n/gi;

    const emailString = 'mailto:beatsbyzae12@gmail.com?subject=' +
                        (values.beat ? 'Beat Purchase' : 'Contacting Isaiah Bullard') +
                        '&body=' + values.statement.replace(newLineRegex, '%0A%0D') + '%0A%0D%0A%0DEmail from ' + values.firstName + ' ' + values.lastName + 
                        (values.stageName ? '%0A%0D"' + values.stageName + '"' : '') + (values.email ? '%0A%0D' + values.email : '') + 
                        (values.phoneNumber ? '%0A%0D' + values.phoneNumber : '');

    window.location.assign(emailString);
  }

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
      <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 60}}>
        <PageSectionTitle>Fill Out the Form</PageSectionTitle>
        <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
        <Container fluid style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <HoveringForm>
            <Form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor: '#707070', color: '#FFFFFF', padding: 24, width: '100%'}}>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormControl name='firstName' ref={register} type={'text'} placeHolder={'First Name'} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormControl name='lastName' ref={register} type={'text'} placeHolder={'Last Name'} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Stage Name/Rap Name/Company Name/Super Hero Name</FormLabel>
                <FormControl name='stageName' ref={register} type={'text'} placeHolder={'Stage Name/Rap Name/Company Name/Super Hero Name'} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormControl name='email' ref={register} type={'email'} placeHolder={'example@example.com'} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Phone Number</FormLabel>
                <FormControl name='phoneNumber' ref={register} type={'text'} placeHolder={'(XXX) XXX-XXXX'} />
              </FormGroup>
              <FormGroup>
                <FormCheck name='beat' ref={register} type={'checkbox'} label={"I'm purchasing a beat!"} />
              </FormGroup>
              <FormGroup>
                <FormLabel>State Your Business</FormLabel>
                <FormControl name='statement' ref={register} as={'textarea'} rows={15} />
              </FormGroup>
              <Button submit text={'Submit'} />
            </Form>
          </HoveringForm>
        </Container>
      </Container>
    </Container>
  );
}

// TODO Select Beats when checked

// TODO Character Limits

// TODO Required Fields

// TODO Phone Number notification

// TODO Notification Modal