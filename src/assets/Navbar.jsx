import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import {toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

    const Logout =()=>{
    localStorage.removeItem('userToken');
    localStorage.clear();
    toast.success('Logout succesfully');
  }
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sellers">
            Sellers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/buyers">
            Buyer
          </Link>
        </li>
      
      </ul>
    </div>
  <button type="button" className="btn btn-primary" onClick={Logout}>Logout</button>
  </div>

</nav>
</>
  )
}

export default Navbar
