const mongoose = require("mongoose");
const Schema = mongoose.Schema // si con mayusucla

const reviewSchema = new Schema({  
    from:     { type: Schema.Types.ObjectId, ref: 'User'  },
    to:       { type: Schema.Types.ObjectId, ref: 'User'  }, // asi aunque sea otro usario ??? entonces otro ID
    nameProposition: {  type: String  }, // Solo guardaremos el nombre de la proposicion, no hace falta el objeto entero
    description: {  type: String  }, // prefiero que sea un emoticon o elegir un emoticon among otros.
    rate:     { type: Number  } // have to calculate an average..
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  module.exports = Review;


