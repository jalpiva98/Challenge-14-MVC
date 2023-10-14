const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Hope it turns out to be true!',
    user_id: 2, 
    post_id: 1,
  },
  {
    comment_text: 'Where to download more RAM?',
    user_id: 1, 
    post_id: 2, 
  },
  {
    comment_text: 'I cant wait to have that card.',
    user_id: 3, 
    post_id: 1, 
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;