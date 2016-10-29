export default [
  { header : true, text : 'MAIN NAVIGATION' },
  {
    icon:'dashboard', text: 'Dashboard', children: [
      {text: 'Home', link: '/'},
      {text: 'Lists', link: '/lists'},
    ]
  },
  {
    icon : 'calendar', text: 'Calendar', link: 'calendar'
  }
];
