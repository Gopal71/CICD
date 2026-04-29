const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello CI/CD World!');
});
app.listen(3001, () => console.log('Server running'));