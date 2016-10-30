import Places from 'containers/places/Places.react';


const menu = [
  { header: true, text: 'MAIN NAVIGATION' },
  { text: 'Home', link: '/', icon: 'home' },
  { text: 'Places', link: '/places', icon: 'map-marker', component: Places },
  {
    icon: 'calendar',
    text: 'Calendar',
    link: 'calendar'
  }
];



export default menu;
