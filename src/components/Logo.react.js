


export default (props) => {
  return (
    <a href={props.href} className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini">{props.mini}</span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg">{props.lg}</span>
    </a>
  );
}
