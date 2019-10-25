require('dotenv').config();
const server = require('./server/server.js');

const port = process.env.PORT || 7000;
server.listen(port, () => console.log(`Server listening on port ${port}!`));