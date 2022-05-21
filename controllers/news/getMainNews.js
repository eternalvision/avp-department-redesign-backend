const { MainNews } = require("../../models");

const getMainNews = async (req, res) => {
  const mainNews = await MainNews.find();

  res.json({
    status: "success",
    code: 200,
    data: {
      mainNews,
    },
  });
};

module.exports = getMainNews;
