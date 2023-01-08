export const addItem = (productDetail) => {
  return {
    type: "ADDITEM",
    payload: productDetail,
  };
};

export const delItem = (productDetail) => {
  return {
    type: "DELITEM",
    payload: productDetail,
  };
};

export const filtProduct = (productDetail) => {
  return {
    type: "FILTER_PRODUCT",
    payload: productDetail,
  };
};
