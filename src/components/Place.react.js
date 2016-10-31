import imgSrc from 'admin-lte/dist/img/user4-128x128.jpg';
import Moment from 'react-moment';
import {Col, Row} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Card = (props) => {
  let img = "https://cdn3.iconfinder.com/data/icons/pix-glyph-set/50/520709-map_marker_1-512.png"
  let style = {
    opacity: 0.2
  };
  if (props.img) {
    img = props.img;
    style.opacity = 1;
    style.height = '100px'
    style.width = '100px'
  }
  return (
    <Col md={3}>
      <div className="box box-primary">
        <div className="box-body box-profile">
          <img className="profile-user-img img-responsive img-circle" src={img} alt="Place" style={style}/>
          <h3 className="profile-username text-center">{props.name}</h3>
          <p className="text-muted text-center">{props.latlng}</p>
          <p className="text-muted text-center">{props.score}</p>
        </div>
        <div className="box-footer">
          <p className="text-muted text-sm">
            <Moment fromNow>{props.createdAt}</Moment>
          </p>
        </div>
      </div>
    </Col>
  )
}

const ListCard = (props) => {
  let items = props.items.map((item, idx) => (<Card key={idx} {...item}/>))
  return (
    <Row>
      <Col lg={12}>
        {items}
      </Col>
    </Row>
  );
}

const Item = (props) => (
  <tr>
    <td>{props.name}</td>
    <td><Moment fromNow>{props.createdAt}</Moment></td>
    <td>{props.score}</td>
  </tr>
)

const ListItem = (props) => {
  let items = props.items.map((item, idx) => (<Item key={idx} {...item}/>));
  return (
    <Col lg={12}>
      <div className="box">
        <div className="box-body table-responsive no-padding">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Date Created</th>
                <th>Score</th>
              </tr>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    </Col>
  )
}

const View = (props) => {
  let placesView = props.type === 'card'
    ? ListCard
    : ListItem;
  let places = React.createElement(placesView, {items: props.places});
  return places
}

export default {
  Card,
  Item,
  View
};
