const { News } = require("../../models");
const { NotFound } = require("http-errors");

const deleteNews = async (req, res) => {
  const { id } = req.params;

  const { imageUrl, title, description } = await News.findByIdAndRemove({ _id: id });

  res.json({
    status: "success",
    code: 200,
    message: "news deleted",

    imageUrl,
    title,
    description,
  });
};

module.exports = deleteNews;
