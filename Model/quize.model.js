const mongoose = require("mongoose");

const quizeSchima = mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  questions: [
    {
      title: String,
      answerOptions: [],
      correctOptions: [],
    },
  ],
  leaderboard: [
    {
      email: String,
      score: Number,
    },
  ],
});

const Quizsmodel = mongoose.model("quize", quizeSchima);

module.exports = {
  Quizsmodel,
};
