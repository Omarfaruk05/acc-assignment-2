const mongoose = require('mongoose');


const tourSchema = mongoose.Schema({
    tourName: {
      type: String,
      requited: [true, 'Please provide a tour name as tourName'],
      trim: true,
      unique: [true, 'Name is not unique'],
      minLength: [3, 'Tour name must name at least 3 characters'],
      maxLength: [100, 'Name is too long.']
  
    },
    image:{
      type: String,
      required: true,    
    },
    duration:{
      type: Number,
      required: true,    
    },
    description:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
      min: [0, 'Price must be positive.']
    },
    viewCount: {
      type: Number,
      default: 0,
    }
  
  
  });
  
  tourSchema.pre('save', function(next){
    console.log('before save data')
  
    next();
  })
  tourSchema.post('save', function(){
    console.log('after save a data')
  })
  
  const Tour = mongoose.model("Tour", tourSchema);

  module.exports = Tour;
  