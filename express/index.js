const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.statusCode = 418;
    res.setHeader('X-Custom-header','SkillFactory')
    res.send('I have received your GET request');
});

app.post('/',(req, res) => {
    console.log(req.url);
    console.log(req.headers);
    res.send('I have received your POST request');
});

app.put('/',(req, res) => {
    res.send('I have received your PUT request');
});

app.delete('/',(req, res) => {
    res.send('I have received your DELETE request');
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const sorting = req.query.sorting;
    res.send(`You have received data on user #${id} with ${sorting} sorting`);
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});

