import React, { useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
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
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <h4 class="text-white mb-3">Quick Link</h4>
                <Link class="btn btn-link" to="/about">About Us</Link>
                <Link class="btn btn-link" to="/contact">Contact Us</Link>
                <Link class="btn btn-link" to="">Privacy Policy</Link>
                <Link class="btn btn-link" to="">Terms & Condition</Link>
                <Link class="btn btn-link" to="">FAQs & Help</Link>
            </div>
            <div class="col-lg-4 col-md-8">
                <h4 class="text-white mb-3">Contact</h4>
                {/* <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>2nd floor,Dhananjoy villa,Near young-staff more.</p> */}
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+09734499938</p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>contactmainphoenix@gmail.com</p>
                <div class="d-flex pt-2">
                    <Link class="btn btn-outline-light btn-social" target='_blank' to="@PhoenixEnglish"><i class="fab fa-twitter"></i></Link>
                    <Link class="btn btn-outline-light btn-social"  target='_blank' to="https://www.facebook.com/contactmainphoenix/"><i class="fab fa-facebook-f"></i></Link>
                    <Link class="btn btn-outline-light btn-social" target='_blank' to="https://www.youtube.com/channel/UClE1ddwSQRKQ8ddW4PoCLRQ?view_as=subscriber"><i class="fab fa-youtube"></i></Link>
                    <Link class="btn btn-outline-light btn-social" target='_blank' to="@phoenixspoken"><i class="fab fa-instagram"></i></Link>
                </div>
            </div>
            {/* <div class="col-lg-3 col-md-6">
                <h4 class="text-white mb-3">Gallery</h4>
                <div class="row g-2 pt-2">
                    <div class="col-4">
                        <img class="img-fluid bg-light p-1" src="img/course-1.jpg" alt=""/>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid bg-light p-1" src="img/course-2.jpg" alt=""/>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid bg-light p-1" src="img/course-3.jpg" alt=""/>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid bg-light p-1" src="img/course-2.jpg" alt=""/>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid bg-light p-1" src="img/course-3.jpg" alt=""/>
                    </div>
                    <div class="col-4">
                        <img class="img-fluid bg-light p-1" src="img/course-1.jpg" alt=""/>
                    </div>
                </div>
            </div> */}
            {/* <div class="col-lg-4 col-md-6">
                <h4 class="text-white mb-3">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div class="position-relative mx-auto" style={{maxWidth: '400px'}}>
                    <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div> */}
            <div class="col-lg-3 col-md-6">
                <h4 class="text-white mb-3">Newsletter</h4>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>2nd floor,Dhananjoy villa,Near young-staff more.</p>

            </div>
        </div>
    </div>
    <div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                    Designed By <a class="border-bottom" href="https://htmlcodex.com">Think-Trick</a><br/><br/>
                    {/* Distributed By <a class="border-bottom" href="https://themewagon.com">Think-Trick</a> */}
                </div>
                {/* <div class="col-md-6 text-center text-md-end">
                    <div class="footer-menu">
                        <Link to="">Home</Link>
                        <Link to="">Cookies</Link>
                        <Link to="">Help</Link>
                        <Link to="">FQAs</Link>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
</div>

<a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</>

  )
}
