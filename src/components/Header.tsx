import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">
          embroidery
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
