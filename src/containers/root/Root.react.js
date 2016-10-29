import 'admin-lte/plugins/slimScroll/jquery.slimscroll.js';
import 'bootstrap';
import 'admin-lte';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';

import React, { PropTypes } from 'react'

import Navbar from './Navbar.react';
import Sidebar from './Sidebar.react';
import Control from './Control.react';

const version = '1.0.0';
const application = "Dashboard";

const Footer = (props) => {
  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        Version <b>{props.version}</b>
    </div>
    All rights reserved.
  </footer>
)
};



class Root extends React.Component {
  constructor(){
    super();
    this.state = {
      sidebar : false,
      control: false
    }
  }

  toggleSidebar = () => {
    this.setState({sidebar : !this.state.sidebar});
  }

  toggleControl = () => {
    this.setState({control : !this.state.control});
  }

  render () {
    return (
      <div className={"skin-blue sidebar-mini " + (this.state.sidebar ? 'sidebar-collapse' : '')}>
        <Navbar toggleSidebar={this.toggleSidebar} toggleControl={this.toggleControl}/>
        <Sidebar />
        <div className="content-wrapper">
          {this.props.children}
        </div>
        <Footer version={version}/>
        <Control open={this.state.control}/>
      </div>
    )

  }
}



export default Root;
