const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const WorkoutSchema = new Schema({
    gifUrl: {
        type: String, 
    },
    equipment: {
        type: String,
    },
    bodyPart: {
        type: String,
    },
    target: {
        type: String,
    },
    name: { //name/type of Workout
        type: String,
    },
    repetition: {
        type: Number,
        min: 0,
        default: 0,
    },
    time: {
        type: Date, //?????? Which 
    },
    distance: { //ex: how much miles user has run
        type: Number,
        min: 0,
        default: 0,
    },
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;