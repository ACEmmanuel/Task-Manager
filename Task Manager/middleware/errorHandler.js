const { customAPIError } = require("../errors/customError")

const errorHandler = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(500)
    .json({ msg: "Sorry Something Went Wrong, Try Again Later" })
}

module.exports = errorHandler
