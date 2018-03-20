const Review = require("../models/Review");


exports.postReview = (req, res, next) => {
    const newReview = new Review({
        from: req.user._id,
        to: req.body.toUser, // appeler l'input de Anglura ici pour traer el user id!!!
        title: req.body.title,
        description: req.body.description
    });

    newReview.save()
        .then(item => res.status(201).json(item))
        .catch(e => res.status(500).send(e));
}
