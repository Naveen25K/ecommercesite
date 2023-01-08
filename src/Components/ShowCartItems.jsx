import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from "../redux/action";

const ShowCartItems = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const remCartItems = (data) => {
    dispatch(delItem(data));
  };

  const loadCartItems = (data) => {
    return (
      <>
        <div className="container bg-light p-2 mt-3">
          <button
            className="btn-close float-end"
            aria-label="close"
            onClick={() => remCartItems(data)}
          ></button>
          <div className="row">
            <div className="col-md-4">
              <img src={data.img} alt={data.title} className="w-50" />
            </div>
            <div className="col-md-8 my-auto border border-1 p-3 rounded-3">
              <h2 className="mb-3">{data.title}</h2>
              <h4 className="mb-3">{`${data.price} ₹`}</h4>
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container bg-light p-5 mt-3 rounded-3 d-flex  flex-column align-items-center">
        <h2 className="mb-4">Your Cart is Empty!</h2>
        <NavLink to="/product" className="btn btn-outline-primary">
          Back To Products
        </NavLink>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(loadCartItems)}

      {state.length === 0 ? null : (
        <div className="text-center">
          <NavLink
            to="/checkout-page"
            className="btn btn-outline-primary mt-5 mb-5"
          >
            Proceed To Checkout <i className="fa fa-forward ms-2" />
          </NavLink>
        </div>
      )}
    </>
  );
};
export default ShowCartItems;
