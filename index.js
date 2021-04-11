const {db, Guest} = require('./server/db');
const guestList = require('./guestList');
const app = require('./server');
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  require('./inviteCode.js');
}

const init = async () => {
  await db.sync();
  await Guest.bulkCreate(guestList);
  app.listen(PORT, () => console.log(`listening on ${PORT}...`));
}

init();
