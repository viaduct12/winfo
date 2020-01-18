module.exports = function (sequelize, Datatypes) {
  const Newsletter = sequelize.define("Newsletter", {

    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    firstName: {
      type: Datatypes.STRING,
      allowNull: false
    },

    lastName: {
      type: Datatypes.STRING,
      allowNull: false
    },

  });

  return Newsletter;
};