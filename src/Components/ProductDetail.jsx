import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import ProductData from "../ProductData";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action";

const ProductDetail = () => {
  const magnifier = useRef();
  const imgMagnifier = useRef();
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

  const showLens = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    imgMagnifier.current.style.transformOrigin = `${x}px ${y}px`;
    imgMagnifier.current.style.transform = `scale(2)`;
  };
  const hideLens = () => {
    imgMagnifier.current.style.transform = `scale(1)`;
    imgMagnifier.current.style.transformOrigin = `center`;
  };
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-start">
            <div
              className="magnifierDiv"
              ref={magnifier}
              onMouseMove={(e) => showLens(e)}
              onMouseLeave={() => hideLens()}
            >
              <img
                id="magnifier"
                src={finalProduct.img}
                alt="one image"
                ref={imgMagnifier}
              />
            </div>
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
