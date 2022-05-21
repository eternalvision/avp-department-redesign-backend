const addNews = require("./addNews");
const deleteNews = require("./deleteNews");
const getAllNews = require("./getAllNews");

const addMainNews = require("./addMainNews");
const editMainNewsById = require("./editMainNewsById");
const getMainNews = require("./getMainNews");
const deleteMainNews = require("./deleteMainNews");

const addAlertsNews = require("./addAlertsNews");
const getAllAlertsNews = require("./getAllAlertsNews");
const deleteAlertsNews = require("./deleteAlertsNews");

module.exports = {
  addNews,
  deleteNews,
  addMainNews,
  getAllNews,
  editMainNewsById,
  getMainNews,
  deleteMainNews,
  addAlertsNews,
  getAllAlertsNews,
  deleteAlertsNews,
};
