const express = require('express');

// ROUTES
const home = require('./routes/home');

const app = express();

app.use('/', home);

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})