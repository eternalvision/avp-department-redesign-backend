const { MainNews } = require("../../models");
const { NotFound } = require("http-errors");

const deleteMainNews = async (req, res) => {
  const { id } = req.params;

  const { imageUrl, title, description } = await MainNews.findByIdAndRemove({ _id: id });

  res.json({
    status: "success",
    code: 200,
    message: "news deleted",

    imageUrl,
    title,
    description,
  });
};

module.exports = deleteMainNews;
