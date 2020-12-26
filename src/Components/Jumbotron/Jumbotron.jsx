import './Jumbotron.css'

export default function Jumbotron(props) {
  return (
    <div className="jumbotron">
      {props.children}
    </div>
  )
}