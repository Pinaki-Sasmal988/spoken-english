import React, { useEffect } from 'react'
import Banner from '../components/Banner';
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
    useEffect(() => {
        // Include your main.js script
        const script = document.createElement('script');
        script.src = '/js/main.js'; // Adjust the path accordingly
        script.async = true;
        document.body.appendChild(script);
        // Clean up the script on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <>
{/* <!-- Navbar Start --> */}
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>pHOENIX</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="courses.html" className="nav-item nav-link">Courses</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-down m-0">
                        <Link to="/faculty" className="dropdown-item">Faculties</Link>
                        <Link to="gallary" className="dropdown-item">Gallary</Link>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            {/* <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a> */}
        </div>
    </nav>
    <Banner/>
    {/* <!-- Navbar End --> */}
    </>
  )
}
