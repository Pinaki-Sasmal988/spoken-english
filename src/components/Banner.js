import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Banner() {
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
    <div className="containers p-0 mb-5">
    <div className="owl-carousel  position-relative header-carousel">
        <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:'rgba(24, 29, 56, .7)'}}>
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-sm-10 col-lg-8">
                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Offline Spoken English Institude </h5>
                            <h1 className="display-3 text-white animated slideInDown">The Best Offline Spoken English Learning Platform</h1>
                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:'rgba(24, 29, 56, .7)'}}>
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-sm-10 col-lg-8">
                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Offline Spoken English Institude In Kakdwip</h5>
                            <h1 className="display-3 text-white animated slideInDown">Get Spoken English Offline Class From Your Home Town</h1>
                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                            <Link to="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                            <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
