module.exports = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define(
    "RefreshToken",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alloNull: false,
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNulls: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNulls: false,
        field: "updated_at",
      },
    },
    {
      tableName: "refresh_tokens",
      timestamp: true,
    }
  );
  return RefreshToken;
};
