const express = require('express');
const router = express.Router();
const controller = require("../controllers/reviews.controller");


router.post('/new', controller.postReview);
router.get('/:id', controller.getReviewById)



module.exports = router;