const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiSchemaAlertsNews } = require("../../models/alertsnews");

const { news: ctrl } = require("../../controllers");

const router = express.Router();

//TODO Добавление новости
// router.post("/", auth, validation(joiSchemaNews), ctrlWrapper(ctrl.addNews));
router.post("/add", auth, validation(joiSchemaAlertsNews), ctrlWrapper(ctrl.addAlertsNews));

//TODO Вывод всех новостей
// router.get("/", auth,ctrlWrapper(ctrl.getAllNews));
router.get("/", ctrlWrapper(ctrl.getAllAlertsNews));

//TODO Удаление новости id
// router.delete("/:id", auth, ctrlWrapper(ctrl.deleteNews));
router.delete("/:id", auth, ctrlWrapper(ctrl.deleteAlertsNews));

module.exports = router;
