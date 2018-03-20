const Proposition = require("../models/Proposition");


exports.postProposition = (req, res, next) => {
    const newProposition = new Proposition({
        title: req.body.title,    
        startTimeHour: req.body.startTimeHour,
        startTimeDate: req.body.startTimeDate,
        endTimeHour: req.body.endTimeHour,
        location: req.body.location,
        owner: req.body.id
    });

    newProposition.save()
        .then(item => res.status(201).json(item))
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