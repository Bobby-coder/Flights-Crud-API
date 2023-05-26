const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Welcome to Node Api",
    data: {},
    error: {},
  });
};

module.exports = { info };

/*
*NOTE-The response object has a status function which sets the status code and status function returns the same response object. When we do response.status(), it sets the status and returns the same response object that it has updated then on response object we call the json() function it sets the json and returns the same response object.

* To avoid writing raw status codes, we use the StatusCodes object from the "http-status-codes" package. This StatusCodes object has codes like "INTERNAL_SERVER_ERROR", "NOT_FOUND", "OK" etc.

* StatusCodes.INTERNAL_SERVER_ERROR
* StatusCodes.OK
* StatusCodes.NOT_FOUND
* StatusCodes.BAD_REQUEST
* StatusCodes.UNAUTHORIZED
* StatusCodes.FORBIDDEN
* StatusCodes.NOT_ACCEPTABLE
* StatusCodes.REQUEST_TIMEOUT
* StatusCodes.CONFLICT
* StatusCodes.GONE
*/