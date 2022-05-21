const { NotFound } = require("http-errors");
const { AlertsNews, Auth } = require("../../models");

const addAlertsNews = async (req, res) => {
  // const { _id } = req.user;

  // const { imageUrl, title, owner, description } = req.body;
  const { imageUrl, title, description } = req.body;

  const news = {
    imageUrl,
    title,
    // owner,
    description,
  };

  const newAlertsNews = await AlertsNews.create({
    ...news,
    // owner: _id,
  });
  if (!newAlertsNews) {
    throw new NotFound(`User with ${_id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      newAlertsNews,
    },
  });
};

module.exports = addAlertsNews;
