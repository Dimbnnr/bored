const mongoose = require("mongoose");
const Schema = mongoose.Schema // si con mayusucla

const propositionSchema = new Schema({
    title:         {  type: String  },
    description:   {  type: String  },
    startTimeDate: {  type: Date  }, // {{today | date:'fullDate'}}
    startTimeHour: {  type: Date  }, // {{XXX | date:'shortTime'}}
    endTimeHour:   {  type: Date  },
    location:      {
      type:           { type: String, default:'Point' },
      address:        { type: String, default:'WeWork Insurgentes Sur 601' },
      coordinates:    {
        type:         [Number],
        default:      [19.3978285, -99.1729289]
      }
    },
    Participants:  [{ type: Schema.Types.ObjectId, ref: 'User'}]  // o array si son varios
  });
  
  const Proposition = mongoose.model('Proposition', propositionSchema);
  module.exports = Proposition;

