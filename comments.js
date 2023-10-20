// Create web server

// 1. Load modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// 2. Create web server
const app = express();

// 3. Configure web server
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

// 4. Define routes
app.get('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
        }
        let comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal server error');
            }
            res.send(comments);
        });
    });
});

// 5. Start web server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});