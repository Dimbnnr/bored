const Review = require("../models/Review");


exports.postReview = (req, res, next) => {
    console.log(req.user)
    const newReview = new Review({
        from: req.user._id,
        to: req.body.toUser, // appeler l'input de Anglura ici pour traer el user id!!!
        idProposition: req.body.idProposition,
        description: req.body.description
    });

    newReview.save()
        .then(item => res.status(201).json(item))
        .catch(e => res.status(500).send(e));
}



exports.getReviewById = function (req, res, next) {
    Review.findById(req.params.id)
        .then(item => {
            console.log(item)
        res.status(200).json(item)}) 
        .catch(e => res.status(500).send(e))
}