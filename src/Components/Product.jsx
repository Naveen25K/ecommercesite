import { NavLink } from "react-router-dom";
import ProductData from "../ProductData";

const Product = () => {
  const cartItem = (props) => {
    return (
      <>
        <div className="card col-md-4 p-2">
          <img
            src={props.img}
            className="card-img-top w-50"
            alt={props.title}
          />
          <div className="card-body">
            <h4 className="card-title mb-3">{props.title}</h4>
            <h5 className="mb-3">{`${props.price} ₹`}</h5>
            <p className="card-text mb-4">{props.desc}</p>
            <div className="d-flex gap-2">
              <NavLink to={`/product/${props.id}`} className="btn btn-primary">
                See Details
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">{ProductData.map(cartItem)}</div>
      </div>
    </>
  );
};
export default Product;
