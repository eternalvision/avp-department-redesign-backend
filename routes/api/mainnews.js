const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiSchemaMainNews } = require("../../models/mainnews");

const { news: ctrl } = require("../../controllers");

const router = express.Router();

//TODO Добавление главной новости
// router.post("/", auth, validation(joiSchemaMainNews), ctrlWrapper(ctrl.addMainNews));
router.post("/add", auth, validation(joiSchemaMainNews), ctrlWrapper(ctrl.addMainNews));

//TODO Вывод главной новости
// router.get("/", auth,ctrlWrapper(ctrl.getMainNews));
router.get("/", ctrlWrapper(ctrl.getMainNews));

//TODO Изменение главной новости
// router.put("/editmainnews", auth, validation(joiSchemaMainNews), ctrlWrapper(ctrl.editMainNewsById));
router.put("/edit/:id", auth, validation(joiSchemaMainNews), ctrlWrapper(ctrl.editMainNewsById));

//TODO Удаление новости id
// router.delete("/:id", auth, ctrlWrapper(ctrl.deleteMainNews));
router.delete("/:id", auth, ctrlWrapper(ctrl.deleteMainNews));

module.exports = router;
