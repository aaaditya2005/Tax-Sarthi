const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/taxsarthi");

const userSchmea = mongoose.Schema({
      name: {
        type: String,
        required: true, 
        trim: true,
      },
      dob: {
        type: Date,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,  
      },
      password: {
        type: String,
        required: true, 
      },    
})

module.exports = mongoose.model('user',userSchmea);