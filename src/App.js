import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Menu from './components/menu';
import Home from './pages/home/';
import Projects from './pages/projects/';
import Beats from './pages/beats/';
import Merchandise from './pages/merchandise/';
import Contact from './pages/contact/';
import NotFound from './pages/notFound/';
import Footer from './components/footer';

/**
 * @todo document all classes
 * @todo document all functions
 * @todo create a README
 * @todo upgrade to soundcloud pro
 * @todo upload Holly Jolly Tape to YouTube and Soundcloud
 * @todo add React Helmet
 */
export default class App extends React.Component {
  render () {
    return (
      <Container fluid style={{padding: 0, display: 'flex', flexDirection: 'column'}}>
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
      </Container>
    );
  }
}