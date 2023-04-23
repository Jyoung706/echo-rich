const errorHandler = (asyncController) => {
  return async (req, res) => {
    try {
      await asyncController(req, res);
    } catch (err) {
      console.log(err);
      res
        .status(err.statusCode ? err.statusCode : 500)
        .json(err.statusCode == 500 ? "internal Server Error" : err.message);
    }
  };
};

module.exports = errorHandler;
