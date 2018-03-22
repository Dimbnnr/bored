const mongoose = require("mongoose");
const Schema = mongoose.Schema // si con mayusucla

const reviewSchema = new Schema({  
    from: {type: Schema.Types.ObjectId, ref: 'User'},
    to: {type: Schema.Types.ObjectId, ref: 'User'}, // asi aunque sea otro usario ??? entonces otro ID
    idProposition: {type: Schema.Types.ObjectId, ref: 'Proposition'}, // correcto ? para vincular el titula de la request, hay que agregar el id ? y title en minuscula ?
    description: {type: String}, // prefiero que sea un emoticon o elegir un emoticon among otros.
    rate: {type: String} // have to calculate an average..
  
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  module.exports = Review;


