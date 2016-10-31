import React from 'react';

import loader from 'load-script';

class SearchPlace extends React.Component {
  constructor() {
    super();

    this.state = {
      google: null,
      search: ''
    }
  }

  componentWillMount() {
    this.url = `https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}&libraries=places`;
  }

  componentDidMount() {
    const setUp = () => {
      this.google = window.google;
      this.autocomplete = new google.maps.places.Autocomplete(this.refs.search);
      this.maps = new google.maps.Map(this.refs.maps, {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        minZoom: 1
      });
      this.service = new google.maps.places.PlacesService(this.maps);

      this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      const pos = place.geometry.location;
        this.setState({place: place, search: place.name });
        if (place.geometry.viewport) {
          this.maps.fitBounds(place.geometry.viewport);
        } else {
          this.maps.setCenter(place.geometry.location);
          this.maps.setZoom(17);
        }

        if(this.props.selectPlace){
          this.props.selectPlace(place);
        }

        var marker = new google.maps.Marker({position: pos, map: this.maps});


      })

    }
    if(!window.google){
      loader(this.url, (err, done) => {
        if (!err) {
          setUp()
        }
      });
    }
    else{
      setUp();
    }


  }

  onInput = (e) => {
    this.setState({search: e.target.value});
  }

  render() {
    const pac = `.pac-container{z-index: 1051 !important};`
    const style = {
      'position': 'absolute',
      'top': '12px',
      'left': '150px',
      'zIndex': 99,
      'textOverflow': 'ellipsis',
      'width': '300px'
    }
    return (
      <div className="row">
        <div className="col-lg-12" style={{height: this.props.height || '500px'}}>
          <style>
            {pac}
          </style>
          <input className="form-control input-sm" style={style} ref="search" type="text" placeholder="search" onChange={this.onInput} value={this.state.search}/>
          <div ref="maps" style={{
            height: '100%'
          }}></div>
        </div>
      </div>
    )
  }
}

const container = (props) => {
  const key = 'AIzaSyDDWVMTQegi0e5fUghj97ObBtBR_6NLXcw'
  return (<SearchPlace apiKey={key} {...props}/>)
};

export default container;
