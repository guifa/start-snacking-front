
const express = require('express');

const app = express();

app.use(express.static('./dist/start-snacking-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/start-snacking-front/'}),
);

app.listen(process.env.PORT || 4200);
