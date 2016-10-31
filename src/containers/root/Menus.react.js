import userImage from 'admin-lte/dist/img/user2-160x160.jpg';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

import {MessagesMenu, NotificationsMenu, TasksMenu, UserAccountMenu} from 'components/RightMenu.react';
import * as ActionMessage from 'actions/messages';
import * as ActionNotification from 'actions/notifications';



const tasks = [
  {
    title : 'nasdnakjsnd',
    progress : '20%'
  }
];

const mapStateToProps = (state, props) => {
  return {
    messages : state.messages.messages,
    notifications : state.notifications.notifications
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    markMessagesRead : () => {
      dispatch({type : 'MARK_MESSAGES_READ'})
    },
    markNotificationsRead : () => {
      dispatch({type : 'MARK_NOTIFICATIONS_READ'})
    },
    listMessages : () => {
      dispatch(ActionMessage.list());
    },
    listNotifications : () => {
      dispatch(ActionNotification.list());
    }

  }
}

class Menus extends React.Component {
  componentDidMount(){
    this.props.listMessages();
    this.props.listNotifications();
  }

  render(){
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <MessagesMenu messages={this.props.messages}/>
          <NotificationsMenu notifications={this.props.notifications} />
          {/*<TasksMenu tasks={tasks} />*/}
          <UserAccountMenu />
          {/* Control Sidebar Toggle Button */}
          <li>
            <a href="#" onClick={this.props.toggleControl}>
              <FontAwesome name="gears" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menus);
