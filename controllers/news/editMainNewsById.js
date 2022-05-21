const { MainNews } = require("../../models");
const { NotFound } = require("http-errors");

const editMainNews = async (req, res) => {
  const { id } = req.params;

  const { imageUrl, title, description } = req.body;

  const result = await MainNews.findByIdAndUpdate({ _id: id }, { imageUrl, title, description }, { new: true });

  res.json({
    status: "success",
    code: 200,
    message: "main news deleted",

    result,
  });
};

module.exports = editMainNews;
