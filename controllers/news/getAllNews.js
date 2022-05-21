const { News } = require("../../models");

const getAllNews = async (req, res) => {
  const allNews = await News.find();

  res.json({
    status: "success",
    code: 200,
    data: {
      allNews,
    },
  });
};

module.exports = getAllNews;
