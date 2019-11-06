// @desc     Get all bootcamps
// @route    Get /api/v1/bootcamps
// @acces    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ succes: true, msg: "show all bootcamps" });
};

// @desc     Get single bootcamp
// @route    Get /api/v1/bootcamps/:id
// @acces    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: "get bootcamp" });
};

// @desc     Create new bootcamp
// @route    Get /api/v1/bootcamps
// @acces    Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: "create new bootcamp" });
};

// @desc     Update bootcamp
// @route    Put /api/v1/bootcamps/:id
// @acces    Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: "update bootcamp" });
};

// @desc     Delete bootcamp
// @route    Delete /api/v1/bootcamps/:id
// @acces    Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: "Delete bootcamp" });
};
