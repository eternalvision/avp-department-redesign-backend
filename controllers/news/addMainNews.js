const { NotFound } = require("http-errors");
const { MainNews, Auth } = require("../../models");

const addMainNews = async (req, res) => {
  // const { _id } = req.user;

  // const { imageUrl, title, owner, description } = req.body;
  const { imageUrl, title, description } = req.body;

  const news = {
    imageUrl,
    title,
    // owner,
    description,
  };

  const newMainNews = await MainNews.create({
    ...news,
    // owner: _id,
  });
  if (!newMainNews) {
    throw new NotFound(`User with ${_id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      newMainNews,
    },
  });
};

module.exports = addMainNews;
