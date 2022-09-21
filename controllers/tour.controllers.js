const Tour = require('../models/Tour.js')

exports.getTours =  async(req, res, next)=> {
    try {
      const {fields} = req.query;
      const tour = await Tour.find({}).sort({fields: 1});
      res.status(200).json({
        status:'Success',
        data: tour,
        message:'Successfull get all the data',
      })
    } catch (error) {
      res.status(200).json({
        status: 'Fail',
        message: "Can't get the data",
        error: error.message,
      })
    }
  }
exports.getToursById =  async(req, res, next)=> {
    try {
      const {id} = req.params;
      const tour = await Tour.find({_id: id});
      res.status(200).json({
        status:'Success',
        data: tour,
        message:'Successfull get the data',
      })
    } catch (error) {
      res.status(200).json({
        status: 'Fail',
        message: "Can't get the data",
        error: error.message,
      })
    }
  }
exports.getChepestTours =  async(req, res, next)=> {
    try {
      const tour = await Tour.find({}).sort({'price': 1}).limit(3);
      res.status(200).json({
        status:'Success',
        data: tour,
        message:'Successfull get the Chepest data',
      })
    } catch (error) {
      res.status(200).json({
        status: 'Fail',
        message: "Can't get the Chepest data",
        error: error.message,
      })
    }
  }
exports.getTrendingTours =  async(req, res, next)=> {
    try {
      const tour = await Tour.find({}).sort({'viewCount': -1}).limit(3);
      res.status(200).json({
        status:'Success',
        data: tour,
        message:'Successfull get the trending data',
      })
    } catch (error) {
      res.status(200).json({
        status: 'Fail',
        message: "Can't get the trending data",
        error: error.message,
      })
    }
  }

exports.createTour =  async(req, res, next)=> {
    try {
      const tour =  new Tour(req.body);

      await tour.save();

      res.status(200).json({
        status: 'success',
        message:'Data inserted',
        data: tour,
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Data is not inserted',
        error: error.message,
      })
    }
  } 
exports.updateTour =  async(req, res, next)=> {
    try {
      const {id} = req.params;
      const result = await Tour.updateOne({_id: id}, {$set: req.body}, {runValidators: true, new: true})

      res.status(200).json({
        status: 'success',
        message:'Data updated',
        data: result,
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Data is not updated.',
        error: error.message,
      })
    }
  } 
  
  