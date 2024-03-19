import React from 'react'

export default function About() {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{objectFit:'cover'}} />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to pHOENIX</h1>
                    <p className="mb-4">Welcome to your Spoken English Institute, where education reigns supreme and compromise is not an option. As a registered institution, we stand as the oldest and most trusted Institute here at Kakdwip, with a legacy of excellence spanning over eight years in modern education.</p>
                    <p className="mb-4">At our institute, every day is a fun day, as we believe in joyful learning experiences that not only educate but also inspire. Our fully trained faculty ensures that each student receives personalized attention and guidance, fostering an environment where imagination meets reality through the use of rejectors to make learning truly immersive.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        {/* <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online classes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div> */}
                        <p> We take pride in our track record of success, with more than 20 students securing jobs after completing our programs. With a commitment to quality education and a dedication to nurturing talent, we strive to empower individuals with the skills and confidence they need to excel in the world of spoken English.</p>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Join us on this journey of joyful learning and unlock your full potential with the guidance of Kakdwip's premier Spoken English Institute.</a>
                </div>
            </div>
        </div>
    </div>
  )
}
