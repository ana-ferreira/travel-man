import UserImage from './UserImage.react';
import FontAwesome from 'react-fontawesome';
import gravatar from 'utils/gravatar';
/**
* Generic Menu
*/
const Menu = (props) => {
  return (
    <li className={"dropdown "+props.menu+"-menu"}>
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <FontAwesome name={props.icon} />
        {
            props.label.value ?
              <span className={"label label-"+props.label.status}>{props.label.value}</span>
              :
              <span></span>
        }

      </a>
      <ul className="dropdown-menu">
        <li className="header">{props.header}</li>
        <li>
          <ul className="menu">
            {props.children}
          </ul>
        </li>
        {/*<li className="footer"><a href="#">See All Messages</a></li>*/}
      </ul>
    </li>
  )
}



/** Message **/
const Message = (props) => {


  let imgSrc = gravatar(props.msg.userImage);
  return (
    <li>
      <a href="#">
        <div className="pull-left">
          <img src={imgSrc} className="img-circle" alt="User Image" />
        </div>
        <h4>
          {props.msg.from}
          <small><i className="fa fa-clock-o" /> {props.msg.createdAt}</small>
        </h4>
        <p>{props.msg.message}</p>
      </a>
    </li>
  )
}

export const MessagesMenu = (props) => {
  let header = (
    <p>
      {`You have ${props.messages.length} messages`}
      <a onClick={props.onClickDone} className="pull-right" href="#">Mark all as read</a>
    </p>
  )
  return (
    <Menu menu="messages" icon="envelope-o"
      label={{status: 'success', value: props.messages.length}}
      header={header} >

      {props.messages.map((m, idx) => <Message key={idx} msg={m}/>)}
    </Menu>
  )
}

/** Notification **/
const Notification = (props) => {
  return (
    <li>
      <a href="#">
        <i className={`fa fa-${props.icon.icon} text-${props.icon.color}`} /> {props.notification}
      </a>
    </li>
  )
}

export const NotificationsMenu = (props) => {
  let header = (
    <p>
      {`You have ${props.notifications.length} notifications`}
      <a onClick={props.onClickDone} className="pull-right" href="#">Mark all as read</a>
    </p>
  )
  return (
    <Menu menu="notifications" icon="bell-o"
      label={{status: 'warning', value: props.notifications.length}}
      header={header} >

      {
        props.notifications.map((m, idx) => {
          return <Notification key={idx} icon={{color: 'aqua', icon: 'user'}} notification={m.notification}/>
        })
      }
    </Menu>
  )
}

/** Tasks **/
const Task = (props) => {
  return (
    <li>
      <a href="#">
        <h3>
          {props.title}
          <small className="pull-right">{props.progress}</small>
        </h3>
        <div className="progress xs">
          <div className="progress-bar progress-bar-aqua" style={{width: props.progress}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
            <span className="sr-only">{props.progress} Complete</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export const TasksMenu = (props) => {
  return (
    <Menu menu="tasks" icon="flag-o" label={{value: props.tasks.length, status: 'danger'}} header={`You have ${props.tasks.length} tasks`}>
      {props.tasks.map((t, idx) => <Task key={idx} {...t} />)}
    </Menu>
  )
}


export const UserAccountMenu = (props) => {
  const imgSrc = gravatar('lucaskatayama@gmail.com');
  return (
    <li className="dropdown user user-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <UserImage src={imgSrc} className="user-image" />
        <span className="hidden-xs">User</span>
      </a>
      <ul className="dropdown-menu">
        {/* User image */}
        <li className="user-header">
          <UserImage src={imgSrc} />
          <p>
            User - Type
            <small>Member since Nov. 2012</small>
          </p>
        </li>
        {/* Menu Body */}
        <li className="user-body">
          <div className="row">
            <div className="col-xs-4 text-center">
              <a href="#">Followers</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Sales</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Friends</a>
            </div>
          </div>
          {/* /.row */}
        </li>
        {/* Menu Footer*/}
        <li className="user-footer">
          <div className="pull-left">
            <a href="#" className="btn btn-default btn-flat">Profile</a>
          </div>
          <div className="pull-right">
            <a href="#" className="btn btn-default btn-flat">Sign out</a>
          </div>
        </li>
      </ul>
    </li>
  )
}
