const mongoose = require("mongoose");
const Schema = mongoose.Schema // si con mayusucla

const propositionSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'}, 
    title: {type: String},
    startTimeHour: {type: String}, // {{XXX | date:'shortTime'}}
    startTimeDate: {type: Date}, // {{today | date:'fullDate'}}
    endTimeHour: {type: Date},
    location: {type: String}, // meeting address,
    Participants: {type:Object}  // o array si son varios
  });
  
  const Proposition = mongoose.model('Proposition', propositionSchema);
  module.exports = Proposition;

