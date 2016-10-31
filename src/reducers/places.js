const initialArrayPlaces = [{
    name: 'Bahia',
    img: '',
    score: 9
  },
  {
    name: 'Piracicaba',
    img: 'http://www.gibametais.com.br/imagens/piracicaba/cidade.jpg',
    score: 5.6
  },
  {
    name: 'Londres',
    img: 'http://previews.123rf.com/images/klavapuk/klavapuk1209/klavapuk120900009/15066959-Bandera-de-Inglaterra-de-los-s-mbolos-del-Reino-Unido-y-Londres-Foto-de-archivo.jpg',
    score: 9
  }
]




const places = (state = { places: initialArrayPlaces }, action) => {
  switch (action.type) {
    case 'PLACE_CREATE':
      return {
        ...state,
        places: [...state.places, action.place]
      }
      break;
    default:
      return state;
  }
}






export default places;
