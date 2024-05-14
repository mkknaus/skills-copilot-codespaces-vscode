const express = require('express');

// Create web server
const app = express();

// Define routes and middleware here

app.get('/comments', (req, res) => {
    // Handle GET request for comments route
    res.send('This is the comments route');
});


app.post('/comments', (req, res) => {
    // Handle POST request for comments route
    res.send('Creating a new comment');
});

app.put('/comments/:id', (req, res) => {
    // Handle PUT request for comments route with specific ID
    const commentId = req.params.id;
    res.send(`Updating comment with ID ${commentId}`);
});

app.delete('/comments/:id', (req, res) => {
    // Handle DELETE request for comments route with specific ID
    const commentId = req.params.id;
    res.send(`Deleting comment with ID ${commentId}`);
});