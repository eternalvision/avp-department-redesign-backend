const { AlertsNews } = require("../../models");

const getAllAlertsNews = async (req, res) => {
  const allAlertsNews = await AlertsNews.find();

  res.json({
    status: "success",
    code: 200,
    data: {
      allAlertsNews,
    },
  });
};

module.exports = getAllAlertsNews;
