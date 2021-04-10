const {db} = require('./server/db');
const app = require('./server');
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  require('./inviteCode.js');
}

const init = async () => {
  await db.sync();
  app.listen(PORT, () => console.log(`listening on ${PORT}...`));
}

init();
