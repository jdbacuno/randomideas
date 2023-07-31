const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifiting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

app.get('/', (request, response) => {
  response.send({ message: 'Welcome to the RandomIdeas API' }); // if you passed in an object in send(), it'll automatically be stringified (type: application/json) response.json() is also possible but it expects a json argument,
});

// Get all ideas
app.get('/api/ideas', (request, response) => {
  response.json({ success: true, data: ideas }); // response.json()
});

// Get all ideas
app.get('/api/ideas/:id', (request, response) => {
  const idea = ideas.find((idea) => idea.id === +request.params.id);

  if (!idea) {
    return response
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  response.json({ success: true, data: idea }); // response.json()
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
