const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
    name: { //name/type of Workout
        type: String
    },
    repetition: {
        type: Number
    },
    time: {
        type: Date //?????? Which 
    },
    distance: { //ex: how much miles user has run
        type: Number
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

module.exports = WorkoutSchema;