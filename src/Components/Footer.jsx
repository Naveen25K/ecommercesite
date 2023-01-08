import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark mt-5 text-light p-5">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h2>Boat Company</h2>
            <hr />
          </div>
          <div className="col-md-3">
            <h4>Contact Detail</h4>
            <div className="mt-4 mb-3">
              <h6 className="fw-bold">Address</h6>
              <p>S-240, Bata Chowkh, Gurgaon</p>
              <p>Near Plaza Complex</p>
            </div>
            <div className="mt-4 mb-3">
              <h6 className="fw-bold">Phone Number</h6>
              <p>
                <span className="fa fa-phone me-2"></span>
                <a href="tel: +918958965696">+918958965696</a>
              </p>
            </div>
            <div className="mt-4 mb-3">
              <h6 className="fw-bold">Email Address</h6>
              <p>
                <span className="fa fa-envelope me-2"></span>
                <a href="mailto: boatofficial@gmail.com">
                  boatofficial@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h4>More Product</h4>
            <div className="mt-4 mb-3">
              <p>Hand Watch</p>
              <p>Boat Hedphones</p>
              <p>Boat Earbuds under 999 only</p>
              <p>Boat Speaker just under 1200 only</p>
              <p>Boat Wireless earphone under 500 only</p>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Our Partner</h4>
            <div className="mt-4 mb-3">
              <p>Google</p>
              <p>Microsoft</p>
              <p>Facebook</p>
              <p>Telsa</p>
              <p>Maruti</p>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Social Media</h4>
            <div className="mt-4 mb-3">
              <i className="fa fa-facebook fs-4 mb-3" />
              <br></br>
              <i className="fa fa-instagram fs-4 mb-3" />
              <br></br>
              <i className="fa fa-twitter fs-4 mb-3" />
              <br></br>
              <i className="fa fa-telegram fs-4 mb-3" />
            </div>
          </div>
        </div>
      </div>
      {/* branding footer */}
      <div className="container-fluid ">
        <div className="row text-center bg-black p-3 text-light">
          <p className="m-0">All rights are reserved @2022.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
