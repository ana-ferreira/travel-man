import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';

const NavLink = (props, context) => {

  let isActive = context.router.isActive(props.to, true),
  className = isActive ? "active" : "";

  return (
    <li className={className}>
      <Link to={props.to} activeClassName="active">
        {props.children}
      </Link>
    </li>
  )
}

NavLink.contextTypes = {
  router: React.PropTypes.object
}


const SidebarMenu = (props) => {
  return (
    <ul className="sidebar-menu">
      {
        props.menu.map((item, id) => {
          if(item.header && item.header){
            return (
              <li key={id} className="header">{item.text}</li>
            )
          }
          else if(item.children && item.children.length > 0){
            return (
              <li key={id} className="active treeview">
                <a href="#">
                  <FontAwesome name={item.icon} /> <span>{item.text}</span>
                  <span className="pull-right-container">
                    <FontAwesome name="angle-left" className="pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                {
                  item.children.map((child, idx) => (
                    <NavLink key={idx} to={child.link}>
                      <FontAwesome name="circle-o" /> {child.text}
                    </NavLink>
                  ))
                }
                </ul>
              </li>
            )
          }
          else {
            return (
              <NavLink key={id} to={item.link}>
                  <FontAwesome name={item.icon} /> <span>{item.text}</span>
                  <span className="pull-right-container">
                  </span>
              </NavLink>
            )
          }
        })
      }
    </ul>
  )
}


export default SidebarMenu;
