import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fw-bold me-5" to="/">Videos Downloader</Link>
                <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold" aria-current="page" to="/youtube">Youtube</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold" aria-current="page" to="/facebook">Facebook</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold" aria-current="page" to="/instagram">Instagram</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active text-white fw-semibold" aria-current="page" to="/shorts">Shorts</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
