const Sequelize = require('sequelize')
const sequelize = new Sequelize('snackorder', 'postgres', 'Tridang93', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully');
  })
  .catch(err => {
    console.log('Unable to connect to the database: ', err);
  });

module.exports = sequelize