const StatusCodes = require("http-status-codes").StatusCodes;

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    meesage: "API is live",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
