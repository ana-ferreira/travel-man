import srcImg from 'admin-lte/dist/img/user2-160x160.jpg';
import UserImage from 'components/UserImage.react';
import SidebarMenu from 'containers/root/SidebarMenu.react';
import FontAwesome from 'react-fontawesome';
import menu from 'config/menu';

const UserPanel = (props) => {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <UserImage src={srcImg} />
      </div>
      <div className="pull-left info">
        <p>User</p>
        <a href="#"><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
  )
}


export default (props) => {
  return (
    <div>
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <UserPanel />
          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <FontAwesome name="search" />
              </button>
            </span>
          </div>
        </form>
        {/* /.search form */}
        {/* sidebar menu: : style can be found in sidebar.less */}
        <SidebarMenu menu={menu}/>
      </section>
    </aside>
  </div>
)
}
