const mongoose = require('mongoose');

const { Schema } = mongoose;
//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const Workout = require('./Workout');
const Achievement = require('./Achievement');

const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    workouts: [{
      type: Schema.Types.ObjectId,
      ref: 'Workout',
      }],
    achievements: [{
      type: Schema.Types.ObjectId,
      ref: 'Achievement',
      }],
  });

  userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;