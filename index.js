const express = require('express');
const crypto = require('crypto');

const server = express();
const PORT = process.env.PORT || 3000;
const tempFeed =     [
    {
        "uid": crypto.randomUUID(),
        "updateDate": new Date().toISOString(),
        "titleText": "Kraft test update",
        "mainText": "Larry Kraft is your state representative, elected to represent state district 46A in the 2022 election that established the DFL trifecta currently in power in Minnesota.",
        "streamUrl": "",
        "redirectionUrl": "https://www.house.mn.gov/members/profile/15619"
    }
];

server.use(express.json());

server.get('/', (req, res) => {
    res.type('application/json').json(tempFeed)
});

server.listen(PORT, () => {
    console.log("The server is listening.")
});
