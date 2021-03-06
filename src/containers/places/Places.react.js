import React from 'react';
import {connect} from 'react-redux';

import ContentWrapper from 'components/ContentWrapper.react';
import Place from 'components/Place.react';
import ActionPlace from 'actions/places';
import SearchPlace from './SearchPlace.react';

import FontAwesome from 'react-fontawesome';
import {
  Modal,
  Button,
  ButtonGroup,
  Form,
  Col,
  FormControl,
  FormGroup,
  ControlLabel
} from 'react-bootstrap';

const ViewModes = (props) => (

  <ButtonGroup className="pull-right" bsSize="xs">
    <Button active={props.view === 'list'} onClick={props.changeView('list')}>
      <FontAwesome name="list"/>{' List'}
    </Button>
    <Button active={props.view === 'card'} onClick={props.changeView('card')}>
      <FontAwesome name="file-o"/>{' Card'}
    </Button>
    <Button active={props.view === 'map'} onClick={props.changeView('map')}>
      <FontAwesome name="map"/>{' Map'}
    </Button>
  </ButtonGroup>
)

class AddForm extends React.Component {

  constructor() {
    super();
    this.state = {
      place: ''
    }
  }


  submit = (e) => {
    this.props.onSubmit({place: this.state.place});
    this.setState({place: ''});
    this.props.close();
  }

  onSelectPlace = (place) => {
    this.setState({place: place})
  }

  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.close}>
        <Form action="" horizontal onSubmit={this.submit}>
          <Modal.Header closeButton>
            <Modal.Title>Add new place</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="name">
              <SearchPlace height="200px" selectPlace={this.onSelectPlace}/>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>

    )
  }
}

const mapStateToProps = (state, props) => {
  return {places: state.places.places, loading: state.places.loading}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createPlace: (place) => {
      let newPlace = {
        name : place.place.name,
        place : place.place.place_id,
        createdAt: new Date(),
        score: 0
      }
      dispatch(ActionPlace.create(newPlace));
    },
    list: () => {
      dispatch(ActionPlace.list());
    }
  }
}

class Places extends React.Component {

  constructor() {
    super();
    this.state = {
      addModalOpen: false,
      view: 'list',
      sort: 'alpha',
      google: null
    }

  }

  close = () => {
    this.setState({addModalOpen: false})
  }

  addPlace = () => {
    this.setState({addModalOpen: true})
  }

  changeView = (view) => () => {
    this.setState({view: view});
  }
  componentWillMount() {


    this.props.list();

  }

  render() {
    let view = this.props.loading
      ? <Col lg={12} className="text-center"><FontAwesome name="spinner" spin size='2x'/></Col>
      : <Place.View places={this.props.places} type={this.state.view} sort={this.state.sort}/>;
    return (
      <ContentWrapper header="Places" subHeader="All travel places">
        <div className="row">
          <div className="col-md-12">
            <Button onClick={this.addPlace} bsStyle="success">
              <FontAwesome name="plus"/>
              Add
            </Button>
            <ViewModes changeView={this.changeView} view={this.state.view}/>
          </div>
        </div>
        <p></p>
        <div className="row">
          {view}
        </div>

        <AddForm close={this.close} isOpen={this.state.addModalOpen} onSubmit={this.props.createPlace}/>
      </ContentWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
