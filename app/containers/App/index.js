/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Img from 'components/Img';

import withProgressBar from 'components/ProgressBar';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup,FormControl ,Button, Col} from 'react-bootstrap';

import LogoImg from 'assets/img/aar323.png';
import imagese from 'assets/img/portfolio/cabin.png';


const AppWrapper = styled.div``;

export function App(props) {
  let plus = (<i className="fa fa-plus lg"/>)
  let img = (<img className="img-fluid" src={LogoImg} alt="" style={{height: 22}}/> )
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand disabled>
            <Link to="/"><i className="fa fa-github fa-2x" style={{marginBottom: -1, marginRight: -15, marginLeft: 65, marginTop: -10, color: "#fff"}}/></Link>
          </Navbar.Brand>
          <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text"
                 placeholder="Search Github" style={{backgroundColor: "#666", border: 0}} />
              </FormGroup>
          </Navbar.Form>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><strong>Pull Request</strong></NavItem>
            <NavItem eventKey={2} href="#"><strong>Issues</strong></NavItem>
            <NavItem eventKey={2} href="#"><strong>Marketplace</strong></NavItem>
            <NavItem eventKey={2} href="#"><strong>Explore</strong></NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title={plus} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>New repository</MenuItem>
              <MenuItem eventKey={3.2}>Import repository</MenuItem>
              <MenuItem eventKey={3.3}>New gist</MenuItem>
              <MenuItem eventKey={3.4}>New organisation</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title={img} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Signed as Sulthan16</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>Your profile</MenuItem>
              <MenuItem eventKey={3.3}>Your stars</MenuItem>
              <MenuItem eventKey={3.4}>Your gists</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Help</MenuItem>
              <MenuItem eventKey={3.4}>Settings</MenuItem>
              <MenuItem eventKey={3.4}>Sign out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        {React.Children.toArray(props.children)}
      </div>
      <footer className="text-center">
        <div className="container">

        </div>  
      </footer>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
