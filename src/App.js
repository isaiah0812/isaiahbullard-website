import React from 'react';
import Menu from './components/menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/';
import Projects from './pages/projects/';
import Beats from './pages/beats/';
import Merchandise from './pages/merchandise/';
import Contact from './pages/contact/';
import NotFound from './pages/notFound/';
import Container from 'react-bootstrap/Container';

export default class App extends React.Component {
  render () {
    return (
      <Container fluid style={{padding: 0, display: 'flex', flexDirection: 'column'}}>
        <Menu />
        <Router>
          <Switch>
            <Route exact path={['/', '/home']} component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/beats' component={Beats} />
            <Route path={['/merch', '/merchandise']} component={Merchandise} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

// TODO Flex Sizing of Components