module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alloNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "student"],
        allowNull: false,
        defaultValue: "student",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
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
      tableName: "users",
      timestamps: true,
    }
  );
  return Users;
};
