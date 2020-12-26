import {NavLink} from 'react-router-dom'

export default function NavbarLink(props) {
  return (
    <NavLink to={props.url} className="nav-link" activeClassName="active">
      {props.children}
    </NavLink>
  )
}