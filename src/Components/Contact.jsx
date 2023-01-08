import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 border border-1 p-4">
            <h1 className="fw-bold mb-4">Contact Us</h1>
            <hr className="w-50" />
            <h3>Boat Company</h3>
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
          <div className="col-md-6 ps-5">
            <form>
              <div className="mb-3">
                <h2 className="fw-bold mb-3">Contact Form</h2>
                <hr className="w-50" />
                <p>Please type your query here. We are availabe 24/7.</p>
                <label for="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleInputPhone"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputAddress" className="form-label">
                  Address
                </label>
                <textarea
                  type="message"
                  className="form-control"
                  id="exampleInputAddress"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
