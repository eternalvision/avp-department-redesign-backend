const { AlertsNews } = require("../../models");

const getAllAlertsNews = async (req, res) => {
  const allAlertsNews = await AlertsNews.find();

  res.json({
    allAlertsNews,
  });
};

module.exports = getAllAlertsNews;
