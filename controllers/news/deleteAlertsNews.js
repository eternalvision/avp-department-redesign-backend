const { AlertsNews } = require("../../models");

const deleteAlertsNews = async (req, res) => {
  const { id } = req.params;

  const { imageUrl, title, description } = await AlertsNews.findByIdAndRemove({ _id: id });

  res.json({
    status: "success",
    code: 200,
    message: "news deleted",

    imageUrl,
    title,
    description,
  });
};

module.exports = deleteAlertsNews;
