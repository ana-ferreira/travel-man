



export default (props) => {
  return (
    <img src={props.src} className={props.className || 'img-circle'} alt="User Image" />
  )
}
