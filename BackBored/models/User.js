const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const PassportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({  
    username: {type: String},
    lastName: {type: String},
    age: {type: Number},
    phoneNumber: {type: Number},
    email: {type: String},
    location          : {
      type            : {type: String, default:'Point'},
      address          : {type: String, default:'WeWork Insurgentes Sur 601' },
      coordinates     : {
        type: [Number],
        default:[19.3978285, -99.1729289]}
    },
    image: {type: String, default: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'},
    belief: {type: String},
    citation: {type: String},
    averageBoredTimePerWeek: {type: Number},
    password: {type: String},
    reviews: {type: Array}, // a confirmer
    roles:{
      type:String,
      enum:["USER", "PREMIUM", "ADMIN"],
      default:"USER"
  },
  propositions: [{type: Schema.Types.ObjectId, ref: 'Proposition'}],
  },
  {
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
  });
  

 // userSchema.plugin(PassportLocalMongoose, {usernameField:"email"})
  const User = mongoose.model('User', userSchema);
  module.exports = User;

