//const {db} = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 5000;

const init = async () => {
  //await db.sync();
  app.listen(PORT, () => console.log(`listening on ${PORT}...`));
}

init();
