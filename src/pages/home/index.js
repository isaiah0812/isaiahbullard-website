import React from 'react';
import ProjectCarousel from './components/projectCarousel';
import Container from 'react-bootstrap/container';

export default class Home extends React.Component {
    render () {
        return (
            <Container fluid style={{padding: 0}}>
                <ProjectCarousel />
            </Container>
        );
    }
}