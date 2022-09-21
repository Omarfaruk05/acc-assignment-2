const express = require('express');
const viewCount = require('../controllers/milldeware/viewCount');
const router = express.Router();
const tourController = require('../controllers/tour.controllers');

router.route('/')
.get(tourController.getTours)
.post(tourController.createTour)

router.route('/trending')
.get(tourController.getTrendingTours)

router.route('/cheapest')
.get(tourController.getChepestTours)
router.route("/:id")
.get(viewCount ,tourController.getToursById)
.patch(tourController.updateTour)

module.exports = router;