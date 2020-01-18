module.exports = function(sequelize, Datatypes) {
  const Volunteer = sequelize.define("Volunteer", {
    
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

    phone: {
      type: Datatypes.INTEGER,
      allowNull: false,
      unique: true
    },

  });

  return Volunteer;
};