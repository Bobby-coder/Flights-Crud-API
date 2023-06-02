const express = require("express");

const { airplaneController } = require("../../controllers");

const { AirplaneMiddleware } = require("../../middleware");

const router = express.Router;

router.post(
  "/",
  AirplaneMiddleware.validateCreateRequest,
  airplaneController.createAirplane
);

module.exports = router;
