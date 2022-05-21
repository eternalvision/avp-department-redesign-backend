const { MainNews } = require("../../models");

const getMainNews = async (req, res) => {
  const mainNews = await MainNews.find();

  res.json({
    mainNews,
  });
};

module.exports = getMainNews;
