import React, {PropTypes} from 'react';
//Redux
import {Provider} from 'react-redux';
// Router
import { Router, Route, hashHistory, IndexRoute, Redirect} from 'react-router';

import Root from 'containers/root/Root.react';
import NotFound from 'components/NotFound.react';
import menu from 'config/menu';

const main = () =>  (
  <div>
    <section className="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
    <section className="content">
      Hello World
    </section>
  </div>
);




class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }


  render(){
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={Root} >
            <IndexRoute component={main} />
            <Route path='/404' component={NotFound} />
            {
              menu.filter(item => !!item.component ).map((item, idx) => {
                  return <Route key={idx} path={item.link} component={item.component} />
              })
            }
            <Redirect from='*' to='/404' />
          </Route>
        </Router>
      </Provider>
    );
  }
}


export default App;
