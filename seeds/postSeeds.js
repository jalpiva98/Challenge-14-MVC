const { Post } = require('../models');

const postData = [
  {
    title: 'New super conductive material',
    content: 'Revolutionary new material discovered?',
    user_id: 1, 
  },
  {
    title: 'How to optimize your PC',
    content: 'The best tips to make your machine run better!',
    user_id: 2, 
  },
  {
    title: 'New Graphics Card coming up!',
    content: 'Deep dive into the upcoming piece of hardware.',
    user_id: 3, 
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;