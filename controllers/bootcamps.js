const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("../models/Bootcamp");
const asyncHandler = require("../middleware/async");

// @desc     Get all bootcamps
// @route    Get /api/v1/bootcamps
// @acces    Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ succes: true, count: bootcamps.length, data: bootcamps });

  next(err);
});

// @desc     Get single bootcamp
// @route    Get /api/v1/bootcamps/:id
// @acces    Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ succes: true, data: bootcamp });

  // res.status(400).json({ succes: false });
  next(err);
});

// @desc     Create new bootcamp
// @route    Get /api/v1/bootcamps
// @acces    Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ succes: true, data: bootcamp });

  next(err);
});

// @desc     Update bootcamp
// @route    Put /api/v1/bootcamps/:id
// @acces    Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!bootcamp) {
    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404);
  }

  res.status(200).json({ succes: true, data: bootcamp });

  next(err);
});

// @desc     Delete bootcamp
// @route    Delete /api/v1/bootcamps/:id
// @acces    Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404);
  }

  res.status(200).json({ succes: true, data: {} });

  next(err);
});
