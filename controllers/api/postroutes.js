const router = require('express').Router();
const { Chat, User } = require('../../models');

//get all messages
//  /:id - being chatroom id ?

router.get('/:id', async (req, res) => {
    try{
        const chatMessages = await Chat.findAll({
          include:[
              {model: User},
          ], 
        })
        res.status(200).json(chatMessages);
    } catch (err) {
        res.status(500).json(err);
    }
});

//post new message

router.post('/', async (req, res) => {
   try {
       const chatMessages = await Chat.create({
        post: req.body.post,
        user_id: req.body.user_id,
        name: req.body.name,
    });
    res.status(200).json(chatMessages);
   } catch (err) {
       res.status(400).json(err)
   }
});

//delete own message


