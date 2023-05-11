const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const ExerciseSchema = new Schema({
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
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;