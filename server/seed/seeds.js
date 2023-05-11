const db = require('../config/connection');
const { Exercise, User } = require('../models');
const exerciseSeeds = require('./excercise.json');


db.once('open', async () => {
  try {
    await Exercise.deleteMany({});
    // await User.deleteMany({});

    await Exercise.create(exerciseSeeds);

    for (let i = 0; i < exerciseSeeds.length; i++) {
      const { _id, name} = await Exercise.create(exerciseSeeds[i]);
      const user = await User.findOneAndUpdate(
        { userName: name },
        {
          $addToSet: {
            exercises: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
