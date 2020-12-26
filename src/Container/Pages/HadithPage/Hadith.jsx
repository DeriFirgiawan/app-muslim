import Card from '../../../Components/Card/Card'

export default function Hadith(props) {
  return (
    <Card id="list-hadith">
      <h5  onClick={() => {props.detail(props.data.id)}} className="card-title">{props.data.name}</h5>
      <h6 className="text-muted">Tersedia: {props.data.available}</h6>
    </Card>
  )
}
