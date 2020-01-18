module.exports = function (sequelize, Datatypes) {
  const Donation = sequelize.define("Donation", {

    furniture: {
      type: Datatypes.STRING,
      allowNull: false
    },

    firstName: {
      type: Datatypes.STRING,
      allowNull: false
    },

    lastName: {
      type: Datatypes.STRING,
      allowNull: false
    },

    picture: {
      type: Datatypes.STRING,
      allowNull: false
    },

    location:{
      type: Datatypes.STRING,
      allowNull: false
    }
  });

  return Volunteer;
};