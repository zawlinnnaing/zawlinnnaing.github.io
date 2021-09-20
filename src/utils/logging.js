function _noOp() {}

const Debug = {
  log: process.env.NODE_ENV === "development" ? console.log : _noOp,
  error: process.env.NODE_ENV === "development" ? console.error : _noOp,
  info: process.env.NODE_ENV === "development" ? console.info : _noOp,
};

export default Debug;
