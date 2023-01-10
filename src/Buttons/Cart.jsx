import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  return (
    <>
      <NavLink to="/cart" className="btn btn-primary">
        <span className="fa fa-cart-plus me-2"></span>
        cart {state.length}
      </NavLink>
    </>
  );
};
export default Cart;
