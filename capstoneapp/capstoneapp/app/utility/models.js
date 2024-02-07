import mongoose from "mongoose";

const userScheam = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    phone: {
      type: String,
    },

    address: {
      type: String,
    },
  },
  { timestamps: true }
);
/*
const taskScheam = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
    task: {
      type: String,
    },

    startTime: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/.test(v);
        },
        message: (props) => `${props.value} is not a valid time format!`,
      },
    },
    endTime: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/.test(v);
        },
        message: (props) => `${props.value} is not a valid time format!`,
      },
    },

    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
*/
export const User = mongoose.models.User || mongoose.model("User", userScheam);
// export const Task = mongoose.models.Task || mongoose.model("Task",taskScheam)
