const DeGiro = require('..');

// You can run as:
// DEGIRO_USER=your-username DEGIRO_PASS=your-pass node examples/ask-bid-price.js

// Or enter your login details here:
const degiro = DeGiro.create({
    // username: 'your-username',
    // password: 'your-password',
});

const ids = ['350009261', '955000797']; // you can get this id by using searchProduct()
const fields = [
    DeGiro.PriceFields.bid,
    DeGiro.PriceFields.ask,
    DeGiro.PriceFields.last,
    DeGiro.PriceFields.bidTime,
    DeGiro.PriceFields.bidDate,
    DeGiro.PriceFields.askTime,
    DeGiro.PriceFields.askDate,
    DeGiro.PriceFields.lastTime,
    DeGiro.PriceFields.lastDate,
    DeGiro.PriceFields.open,
    DeGiro.PriceFields.high,
    DeGiro.PriceFields.low,
    DeGiro.PriceFields.close,
    DeGiro.PriceFields.lastVolume,
];




degiro.login().then(() => degiro.getPriceInfo(ids, fields))
    .then(res => console.log(JSON.stringify(res, null, '  ')))
    .catch(console.error);
