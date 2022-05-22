const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiSchemaNews } = require("../../models/news");

const { news: ctrl } = require("../../controllers");

const router = express.Router();

//TODO Добавление новости
// router.post("/", auth, validation(joiSchemaNews), ctrlWrapper(ctrl.addNews));
router.post("/add", auth, validation(joiSchemaNews), ctrlWrapper(ctrl.addNews));

//TODO Вывод всех новостей
// router.get("/", auth,ctrlWrapper(ctrl.getAllNews));
router.get("/", ctrlWrapper(ctrl.getAllNews));

//TODO Удаление новости id
// router.delete("/:id", auth, ctrlWrapper(ctrl.deleteNews));
router.delete("/:id", auth, ctrlWrapper(ctrl.deleteNews));

module.exports = router;
