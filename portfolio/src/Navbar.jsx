import React from 'react'

function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg bg-body-secondary z-3 ">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav px-2">
        <li className="nav-item px-2  ">
          <a className="nav-link  text-dark" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-dark" href="#skills">Skills</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-dark" href="#project">Projects</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link  text-dark" href="#about"  >
            About me
          </a>
        </li>
        <li className='nav-item px-2'>
            <a className='nav-link text-dark' href='#contact'>
            Contact
            </a>
            
        </li>
      </ul>
    </div>
  </div>
  <h4 className='mx-3'>Developer</h4>
</nav>
</div>
    
    
    </>
  )
}

export default Navbar