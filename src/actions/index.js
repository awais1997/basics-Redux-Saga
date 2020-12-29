export const getNameRequest = () => {
  return {
    type: "REQUEST",
  };
};

export const getNameSuccess = (name) => {
  console.log("Updated name", name);
  return {
    type: "SUCCESS",
    payload: name,
  };
};
export const getNameError = (err) => {
  return {
    type: "FAIL",
    payload: err,
  };
};
