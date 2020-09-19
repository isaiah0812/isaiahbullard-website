import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Menu from './components/menu';
import Footer from './components/footer';

import Home from './pages/home/';
import Projects from './pages/projects/';
import Beats from './pages/beats/';
import Merchandise from './pages/merchandise/';
import Contact from './pages/contact/';
import NotFound from './pages/notFound/';

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