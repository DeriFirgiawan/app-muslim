export default function CardContent(props) {
  return (
    <div className="card-content p-3 animate__animated animate__fadeIn">
      <h4>{props.name} No. {props.number}</h4>
      <h6 className="text-arabic mt-3">{props.arab}</h6>
      <p className="text-muted mt-4">{props.id}</p>
      <hr />
    </div>
  )
}