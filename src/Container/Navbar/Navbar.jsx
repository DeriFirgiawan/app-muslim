import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen, faAlignRight} from '@fortawesome/free-solid-svg-icons'
import NavbarLink from './NavbarLink'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-sm">
        <span className="navbar-brand" >Ummah</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faAlignRight} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mt-2 ms-auto">
            <NavbarLink url="/">
              <FontAwesomeIcon icon={faHome} />
              Beranda
            </NavbarLink>
            <NavbarLink url="/hadith">
              <FontAwesomeIcon icon={faBookOpen} />
              Hadith
            </NavbarLink>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
