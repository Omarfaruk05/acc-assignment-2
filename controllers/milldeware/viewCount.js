const { findByIdAndUpdate } = require('../../models/Tour');
const Tour = require('../../models/Tour');


const viewCount = async(req, res, next)=> {
    try {
        const {id} = req.params;

        await Tour.findByIdAndUpdate(id, {$inc:{viewCount: 1}},  {new: true});

        next();

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'dose not incrase',
            error: error.message,
          })
    }
}

module.exports = viewCount;