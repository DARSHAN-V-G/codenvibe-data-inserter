import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  team_name: {
    type: String,
    required: true,
    unique: true,
  },
  roll_nos: {
    type: [String],
    required: true,
  },
  members: {
    type: [String],
    required: false,
    default: []
  },
  emails: {
    type: [String],
    required: true,
  },
  otp: {
    code: { type: String, default: "" },
    generatedAt: { type: Date, default: null },
    expiresAt: { type: Date, default: null }
  },
  score: {
    type: Number,
    default: 0
  },
  testcases_passed: {
    type: [Number],
    default: []
  },
  year: {
    type: Number,
    required: true
  }
}, {
  timestamps: true 
});

export default mongoose.model('User', userSchema);
