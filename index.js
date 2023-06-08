import express, { json } from 'express';

const server = express();
const PORT = process.env.PORT || 3000;

server.use(json());
server.listen(PORT, () => {
    console.log("The server is listening.")
});
