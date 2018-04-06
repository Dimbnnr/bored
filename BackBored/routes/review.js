const express = require('express');
const router = express.Router();
const reviewController = require("../controllers/reviews.controller");

router.post('/new', reviewController.postReview);
router.get('/:id', reviewController.getReviewById)

module.exports = router;