const { Schema, model } = require("mongoose");
const Joi = require("joi");

const mainNewsSchema = Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "Enter a image link"],
    },
    title: {
      type: String,
      required: [true, "Enter a title"],
    },
    description: {
      type: String,
      required: [true, "Enter a description"],
    },
    createdAt_ms: {
      type: String,
      default: () => Date.now(),
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const joiSchemaMainNews = Joi.object({
  imageUrl: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const MainNews = model("mainnews", mainNewsSchema);

module.exports = {
  MainNews,
  joiSchemaMainNews,
};
