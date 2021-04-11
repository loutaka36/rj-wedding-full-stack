const {db, Guest} = require('./server/db');
const guestList = require('./guestList');

const seed = async () => {
  try {
    await Guest.bulkCreate(guestList);
    console.log('success!')
  } catch (err) {
   console.log(err)
  }
}

seed();
