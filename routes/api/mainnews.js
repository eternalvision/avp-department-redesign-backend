const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiSchemaMainNews } = require("../../models/mainnews");

const { news: ctrl } = require("../../controllers");

const router = express.Router();

//TODO Добавление главной новости
// router.post("/", auth, validation(joiSchemaMainNews), ctrlWrapper(ctrl.addMainNews));
router.post("/add", validation(joiSchemaMainNews), ctrlWrapper(ctrl.addMainNews));

//TODO Изменение главной новости
// router.put("/editmainnews", auth, validation(joiSchemaMainNews), ctrlWrapper(ctrl.editMainNewsById));
router.put("/edit/:id", validation(joiSchemaMainNews), ctrlWrapper(ctrl.editMainNewsById));

//TODO Удаление новости id
// router.delete("/:id", auth, ctrlWrapper(ctrl.deleteMainNews));
router.delete("/:id", ctrlWrapper(ctrl.deleteMainNews));

module.exports = router;
