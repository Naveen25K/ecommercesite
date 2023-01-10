import React from "react";
import { useSelector } from "react-redux";

const Delivered = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-primary text-white"
        style={{ height: "88vh" }}
      >
        <h2>
          Thank You for shoping with us! <br></br> Your order has been
          delivered!
        </h2>
      </div>
    </>
  );
};
export default Delivered;
