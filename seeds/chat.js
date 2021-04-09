const { Chat } = require('../models');
const sequelize = require('../config/connection');

const chatData = [{
        post: 'Welcome to the chatroom',
        user_id: 1,
    }];

const seedChat = async () =>{
    await Chat.bulkCreate(chatData); }

module.exports = seedChat;