import React from 'react';
import ContentWrapper from 'components/ContentWrapper.react';
import Place from 'components/Place.react';
import {Modal, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
const info = {
  name : 'Piracicaba',
  score: 7.6,
  latlng: '',
  description: `Cidade longa
  blabalbal
  blabalbal
  blabalbal
  `,
  createdAt : new Date()
}

class Places extends React.Component {

  constructor(){
    super();
    this.state = {
      addModalOpen : false
    }
  }

  close = () => {
    this.setState({addModalOpen : false})
  }

  addPlace = () => {
    this.setState({addModalOpen : true})
  }

  render(){
    return (
        <ContentWrapper header="Places" subHeader="All travel places">
          <div className="row">
            <div className="col-md-12">
              <Button onClick={this.addPlace} bsStyle="success">
                <FontAwesome name="plus" /> Add
              </Button>
            </div>
          </div>
          <p></p>
          <div className="row">

            <div className="col-md-3">
              <Place {...info}/>
            </div>
          </div>

          <Modal show={this.state.addModalOpen} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Add new place</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              alksndlanskln
            </Modal.Body>
          </Modal>
        </ContentWrapper>
    )
  }
}



export default Places;
