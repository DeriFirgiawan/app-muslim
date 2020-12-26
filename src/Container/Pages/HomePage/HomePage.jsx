import Card from '../../../Components/Card/Card'
import Jumbotron from '../../../Components/Jumbotron/Jumbotron'

export default function HomePage() {
  return (
    <main className="container">
      <Jumbotron>
        <Card>
          <p className="text-muted">
            “ Para ulama adalah pewaris para nabi. Sesungguhnya para nabi tidak mewariskan dinar ataupun dirham, tetapi mewariskan ilmu. Maka dari itu, barang siapa mengambilnya, ia telah mengambil bagian yang cukup.”
          </p>
          <h6 className="card-subtitle text-muted mb-2">[HR. Abu Dawud no. 6297]</h6>
        </Card>
        <Card>
          <p className="text-muted">
            “ Barangsiapa yang Allah kehendaki mendapatkan seluruh kebaikan, maka Allah akan memahamkan dia tentang agama.”
          </p>
          <h6 className="card-subtitle text-muted mb-2">[HR. Bukhari no. 71]</h6>
        </Card>
        <Card>
          <p className="text-muted">
            " Sesungguhnya seorang penuntut ilmu akan dimintakan ampunan untuknya oleh para penghuni langit dan bumi, bahkan ikan-ikan  yang di air juga memintakan ampunan untuknya "
          </p>
          <h6 className="card-subtitle text-muted mb-2">[HR. Ibnu Majah no. 223]</h6>
        </Card>
      </Jumbotron>
    </main>
  )
}
