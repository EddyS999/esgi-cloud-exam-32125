const { Sequelize } = require('sequelize')

const urldb = process.env.DATABASE_URL; 

// database
const sequelize = new Sequelize(
  urldb,
  'postgres://fakeurl', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    console.log("ok");
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
