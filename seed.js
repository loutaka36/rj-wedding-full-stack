const {db, Guest} = require('./server/db');

const guestSeed = [{
    firstName: 'Joyce',
    lastName: 'Chung',
    groupId: 1
  },
  {
    firstName: 'Lydia',
    lastName: 'Chung',
    groupId: 1
  },
  {
    firstName: 'Katherine',
    lastName: 'Chung',
    groupId: 1
  },
  {
    firstName: 'Lou',
    lastName: 'Takahashi',
    groupId: 2
  },
  {
    firstName: 'Koharu',
    lastName: 'Takahashi',
    groupId: 2
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true })
    await Guest.bulkCreate(guestSeed);
  } catch (err) {
   console.log(red(err))
  }
}

seed();
