import './Card.css'
export default function Card(props){
  return (
    <div className="card animate__animated animate__backInLeft" id={props.id}>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}
