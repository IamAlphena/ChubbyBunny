const User = require('./user'); 
const Chat = require('./chat');


//one user with many chats
User.hasMany(Chat, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Chat.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Chat };

