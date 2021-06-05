// require your server and launch it here
const server = require('./api/server.js');

server.listen(4000, () => {
    console.log('you got a sick server running on port 4000')
});
