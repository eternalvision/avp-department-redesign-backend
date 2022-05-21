const { NotFound } = require("http-errors");
const { News, Auth } = require("../../models");

const addNews = async (req, res) => {
  // const { _id } = req.user;

  // const { imageUrl, title, owner, description } = req.body;
  const { imageUrl, title, description } = req.body;

  const news = {
    imageUrl,
    title,
    // owner,
    description,
  };

  const newNews = await News.create({
    ...news,
    // owner: _id,
  });
  if (!newNews) {
    throw new NotFound(`User with ${_id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      newNews,
    },
  });
};

module.exports = addNews;
