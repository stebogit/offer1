const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ status: 'OK' });
});

app.get('/api/properties', (req, res) => {
    res.sendFile(path.join(__dirname, './homes.json'));
});

app.post('/api/email', (req, res) => {
    console.log(req.body);
    setTimeout(() => res.json({ success: 'OK' }), 1000); // fake load time
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
