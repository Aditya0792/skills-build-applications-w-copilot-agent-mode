import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    profile: {
      firstName: String,
      lastName: String,
      avatar: String
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
export default User;
