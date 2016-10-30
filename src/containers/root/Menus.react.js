import {MessagesMenu, NotificationsMenu, TasksMenu, UserAccountMenu} from 'components/RightMenu.react';
import userImage from 'admin-lte/dist/img/user2-160x160.jpg';
import FontAwesome from 'react-fontawesome';

const messages = [
  {
    from : 'Lucas Katayama',
    message: 'Buy a theme',
    createdAt : '5 mins',
    userImage : userImage
  }
]

const notifications = [
  {
    notification : 'BLablabla'
  }
];

const tasks = [
  {
    title : 'nasdnakjsnd',
    progress : '20%'
  }
];



export default (props) => {
  return (
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <MessagesMenu messages={messages}/>
        <NotificationsMenu notifications={notifications} />
        <TasksMenu tasks={tasks} />
        <UserAccountMenu />
        {/* Control Sidebar Toggle Button */}
        <li>
          <a href="#" onClick={props.toggleControl}>
            <FontAwesome name="gears" />
          </a>
        </li>
      </ul>
    </div>
  )
}
