const Bootcamp = require("../models/Bootcamp");

// @desc     Get all bootcamps
// @route    Get /api/v1/bootcamps
// @acces    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ succes: true, data: bootcamps });

    if (!bootcamp) {
      res.status(400).json({ succces: false });
    }
  } catch (error) {
    res.status(400).json({ succes: false });
  }
};

// @desc     Get single bootcamp
// @route    Get /api/v1/bootcamps/:id
// @acces    Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    res.status(200).json({ succes: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ succes: false });
  }
};

// @desc     Create new bootcamp
// @route    Get /api/v1/bootcamps
// @acces    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ succes: true, data: bootcamp });
  } catch (error) {
    console.log(error);

    res.status(400).json({ succes: false });
  }
};

// @desc     Update bootcamp
// @route    Put /api/v1/bootcamps/:id
// @acces    Private
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!bootcamp) {
    return res.status(400).json({ succes: false });
  }

  res.status(200).json({ succes: true, data: bootcamp });
};

// @desc     Delete bootcamp
// @route    Delete /api/v1/bootcamps/:id
// @acces    Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: "Delete bootcamp" });
};
