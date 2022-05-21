const { News } = require("../../models");

const getAllNews = async (req, res) => {
  const allNews = await News.find();

  res.json({
    allNews,
  });
};

module.exports = getAllNews;
