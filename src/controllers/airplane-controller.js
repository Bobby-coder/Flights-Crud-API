const { AirplaneService } = require("../services");

const { StatusCodes } = require("http-status-codes");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Successfully created an airplane";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } 
  catch (error) {
    ErrorResponse.message = "Something went wrong while creating airplane";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
