const seedChat = require('./chat');
const seedUser = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n------DATABASE SYNCED ------ \n')
  
    await seedUser();
    console.log('\n------USERS SEEDED ------ \n')
  
    await seedChat();
    console.log('\n------MESSAGE SEEDED ------ \n')
  
    process.exit(0);
}

seedAll();