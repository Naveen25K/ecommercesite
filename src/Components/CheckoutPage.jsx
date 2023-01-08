import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/action";

const CheckoutPage = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();
  let totalAmount = 0;

  const removeItems = (data) => {
    dispatch(delItem(data));
  };

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 pe-5">
            <form>
              <h2 className="fw-bold mb-3">Billing Adress Info.</h2>
              <hr className="w-50" />
              <p>Please type your your Billing details below.</p>
              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                  Name
                </label>
                <div className="d-flex flex-row gap-1">
                  <input
                    type="text"
                    placeholder="first name..."
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                  <input
                    type="text"
                    placeholder="last name"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                  Address - 1
                </label>
                <div className="d-flex flex-row gap-1">
                  <input
                    type="text"
                    placeholder="House No."
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="d-flex flex-row mt-2 gap-1">
                  <input
                    type="text"
                    placeholder="Landmark"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                  Additional Info...
                </label>
                <textarea
                  type="text"
                  placeholder="text..."
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPhone" className="form-label">
                  Phone
                </label>
                <div className="d-flex flex-row gap-1">
                  <input
                    type="text"
                    placeholder="+91"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                  <input
                    type="text"
                    placeholder="Additional No."
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                  />
                </div>
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
            </form>
          </div>

          <div className="col-md-6 border border-1 p-4">
            <h2 className="fw-bold mb-4">Billing Details</h2>
            <hr />

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {state.map((val, ind) => {
                  ind++;
                  totalAmount += val.price;
                  return (
                    <tr>
                      <th scope="row">{ind++}</th>
                      <td>{val.title}</td>
                      <td>{`${val.price} ₹`}</td>
                      <td>
                        <a href="#">
                          <i
                            className="fa fa-trash"
                            onClick={() => removeItems(val)}
                          />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="totalPay mt-5">
              <h4 className="mb-4">Your Total bill is: </h4>
              <h2> {`${totalAmount} ₹`} </h2>
            </div>

            <NavLink
              to="Proceed-to-pay"
              className="btn btn-outline-danger mt-5"
            >
              proceed To Pay
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
