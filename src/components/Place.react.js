import imgSrc from 'admin-lte/dist/img/user4-128x128.jpg';
import Moment from 'react-moment';


export default (props) => (
  <div className="box box-primary">
    <div className="box-body box-profile">
      <img className="profile-user-img img-responsive img-circle" src={imgSrc} alt="Place" />
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

)
