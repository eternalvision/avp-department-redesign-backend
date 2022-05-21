const { Schema, model } = require("mongoose");
const Joi = require("joi");

const newsSchema = Schema(
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
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "auth",
    //   required: true,
    // },
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

const joiSchemaNews = Joi.object({
  imageUrl: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const News = model("news", newsSchema);

module.exports = {
  News,
  joiSchemaNews,
};
