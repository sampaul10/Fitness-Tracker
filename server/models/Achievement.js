const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const AchievementSchema = new Schema({
    achievementId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
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
        },      
    ],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
});

const Achievement = mongoose.model('Achievement', AchievementSchema);

module.exports = Achievement;