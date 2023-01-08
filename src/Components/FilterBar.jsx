import React from "react";

const FilterBar = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="filterMe d-flex justify-content-evenly">
            <div>
              <label for="products" className="mx-1">
                <b>Choose a Product:</b>
              </label>
              .
              <select name="products" id="products">
                <option value="all" selected>
                  All
                </option>
                <option value="airdopes">Airdopes</option>
                <option value="watch">Watch</option>
                <option value="earphones">Earphones</option>
                <option value="headphones">Headphones</option>
              </select>
            </div>

            <div>
              <label for="price" className="mx-1">
                <b>Choose a Price:</b>
              </label>
              <select name="price" id="price">
                <option value="500-1000">500-1000</option>
                <option value="1000-1300">1000-1300</option>
                <option value="1300-1600">1300-1600</option>
                <option value="1500-3000">1500-3000</option>
              </select>
            </div>
            <button className="btn btn-outline-danger">Reset Filter</button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default FilterBar;
