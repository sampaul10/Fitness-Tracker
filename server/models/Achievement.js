const mongoose = require('mongoose');

const { Schema } = mongoose;

const AchievementSchema = new Schema({
    username: { 
        type: String,
    },
    recordDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    record: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Workout',
        required: true,
        }
    ],
});

const Achievement = mongoose.model('Achievement', AchievementSchema);

module.exports = Achievement;