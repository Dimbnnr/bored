const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({  
    username:     { type: String  },
    name:         { type: String  },    
    facebookID:   { type: String  },
    age:          { type: Number  },
    email:        { type: String  },
    image:        { type: String, default: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'},
    myPropositions:[ {type: Schema.Types.ObjectId, ref: 'Proposition'}],
    belief:       { type: String  },
    citation:     { type: String  },
    location:     {
      type:         { type: String, default:'Point' },
      address:      { type: String, default:'WeWork Insurgentes Sur 601' },
      coordinates:  {
        type:         [Number],
        default:      [19.3978285, -99.1729289]
      }
    }
  },
  {
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
  });
  

  const User = mongoose.model('User', userSchema);
  module.exports = User;

