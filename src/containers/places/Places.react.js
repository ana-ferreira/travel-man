import React from 'react';
import {connect} from 'react-redux';

import ContentWrapper from 'components/ContentWrapper.react';
import Place from 'components/Place.react';
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
import FontAwesome from 'react-fontawesome';

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
      name: ''
    }
  }

  onChangeName = (e) => {
    this.setState({name: e.target.value})
  }


  submit = (e) =>{
    this.props.onSubmit({
      name : this.state.name
    });
    this.props.close();
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
            <Col lg={2}>
              <ControlLabel>Name</ControlLabel>
            </Col>
            <Col lg={10}>
              <FormControl placeholder="Name" value={this.state.name} onChange={this.onChangeName}/>
            </Col>
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
  return {places: state.places.places}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createPlace:(place) => {
      dispatch({type: 'PLACE_CREATE', place: place});
    }
  }
}

class Places extends React.Component {

  constructor() {
    super();
    this.state = {
      addModalOpen: false,
      view: 'card'
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


  render() {


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
          <Place.View places={this.props.places} type={this.state.view}/>
        </div>

        <AddForm
          close={this.close}
          isOpen={this.state.addModalOpen}
          onSubmit={this.props.createPlace}/>
      </ContentWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
