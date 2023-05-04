const mongoose = require('mongoose');

const { Schema } = mongoose;

const AchievementSchema = new Schema({
    name: { 
        type: String
    },
});