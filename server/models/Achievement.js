const mongoose = require('mongoose');

const { Schema } = mongoose;

const AchievementSchema = new Schema({
    name: { //name/type of Workout
        type: String
    },
});