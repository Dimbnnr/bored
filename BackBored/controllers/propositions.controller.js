const Proposition = require("../models/Proposition");


exports.postProposition = (req, res, next) => {
    const newProposition = new Proposition({
        title:          req.body.title,
        description:    req.body.description,    
        startTimeHour:  req.body.startTimeHour,
        startTimeDate:  req.body.startTimeDate,
        endTimeHour:    req.body.endTimeHour,
        location:       req.body.location    
    });
    newProposition.save()
        .then(propositionCreated =>
            User.findByIdAndUpdate(req.user._id, {$push: { myPropositions : propositionCreated._id}}, { new:true })
                .then(userUpdated => res.status(201).json(userUpdated)))
                .catch( err => console.log("Error while saving proposition into array User")) 
        .catch(e => res.status(500).send(e));
}    

exports.getAllPropositions = function (req, res, next) {
    Proposition.find()
        .then(items => res.status(200).json(items))
        .catch(e => res.status(500).send(e));
}

exports.getPropositionById = function (req, res, next) {
    Proposition.findById(req.params.id)
        .then(item => {
            console.log(item)
        res.status(200).json(item)}) 
        .catch(e => res.status(500).send(e))
}

exports.patchProposition = (req, res, next) => {
    Proposition.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(item => res.status(200).json(item))
        .catch(e => res.status(500).send(e));
}


exports.deleteProposition = (req, res, next) => {
    Proposition.findByIdAndRemove(req.params.id)
        .then(item => res.status(200).json(item))
        .catch(e => res.status(500).send(e));
}