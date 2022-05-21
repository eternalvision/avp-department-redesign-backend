const { Auth } = require("../../models");

const getCurrent = async (req, res) => {
  const { _id } = req.user;
  const currentUser = await Auth.findById(_id);
  const { name, email } = currentUser;

  res.json({
    status: "success",
    code: 200,
    data: {
      name,
      email,
    },
  });
};

module.exports = getCurrent;
