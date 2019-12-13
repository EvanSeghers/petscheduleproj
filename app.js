const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const config = require('./config');

const app = express();

// Express configuration.
app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('trust proxy', true);

// Customers routes.
app.use('/customers', require('./customers/crud'));

app.use('/schedule', require('./schedule/crud'));

// Index route.
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Start the server.
const server = app.listen(config.get('PORT'), () => {
    const port = server.address().port;
    console.log(`App listening on ${port}`);
});

module.exports = app;