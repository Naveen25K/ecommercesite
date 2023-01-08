import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductData from "../ProductData";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action";

const ProductDetail = () => {
  const productId = useParams();
  const productDetail = ProductData.filter((x) => x.id == productId.id);
  const finalProduct = productDetail[0];

  const [cartState, setCartState] = useState("Add To Cart");
  const dispatch = useDispatch();

  const handleCart = (finalProduct) => {
    if (cartState === "Add To Cart") {
      dispatch(addItem(finalProduct));
      setCartState("Remove From Cart");
    } else {
      dispatch(delItem(finalProduct));
      setCartState("Add To Cart");
    }
  };

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-start">
            <img
              src={finalProduct.img}
              alt="one image"
              height={"auto"}
              width={"400px"}
            />
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">{finalProduct.title}</h1>
            <hr />
            <h5 className="mb-3">{`${finalProduct.price} ₹`}</h5>
            <p className="mb-3">{finalProduct.desc}</p>
            <button
              onClick={() => handleCart(finalProduct)}
              className="btn btn-outline-primary mt-2"
            >
              {cartState}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
