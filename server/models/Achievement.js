const mongoose = require('mongoose');

const { Schema } = mongoose;

const AchievementSchema = new Schema({
    name: { 
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = AchievementSchema;