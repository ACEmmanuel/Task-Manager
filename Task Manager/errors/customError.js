class customAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

const createCustomCode = (msg, status) => {
  return new customAPIError(msg, status)
}

module.exports = { createCustomCode, customAPIError }
