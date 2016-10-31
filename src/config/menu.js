import Places from 'containers/places/Places.react';
import SearchPlace from 'containers/places/SearchPlace.react';

const menu = [
  { header: true, text: 'MAIN NAVIGATION' },
  { text: 'Home', link: '/', icon: 'home' },
  { text: 'Places', link: '/places', icon: 'map-marker', component: Places },
  { text: 'Search', link: '/places/search', icon: 'map-marker', component: SearchPlace },
  {
    icon: 'calendar',
    text: 'Calendar',
    link: 'calendar'
  }
];



export default menu;
