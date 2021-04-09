const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
    {
        "name": "Admin",
        "email": "hello@no.com",
        "password": "password"
    }
];

const seedUser = async ()  => {
    // await sequelize.sync({force: true});
    await User.bulkCreate(userData)
};

module.exports = seedUser;