import Logo from 'components/Logo.react';
import Menus from './Menus.react';
import {Link} from 'react-router';

const mini = (<span><b>T</b>Man</span>)
const large = (<span><b>Travel</b>Man</span>);

export default (props) => {
    return (
      <header className="main-header">
        {/* Logo */}
        <Link to="/">
          <Logo mini={mini} lg={large}/>
        </Link>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a href="#" className="sidebar-toggle" role="button" onClick={props.toggleSidebar}>
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <Menus toggleControl={props.toggleControl}/>
        </nav>
      </header>

    );
}
