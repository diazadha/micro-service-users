const { Users, RefreshToken } = require("../../../models");

module.exports = async (req, res) => {
  const userId = req.body.user_id;

  const user = await Users.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  await RefreshToken.destroy({
    where: { user_id: user.id },
  });

  return res.json({
    status: "success",
    message: "refresh token deleted",
  });
};
