import React from "react";

export default () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Google Books Search</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}