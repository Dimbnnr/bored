const express = require('express');
const router = express.Router();
const propositionController = require("../controllers/propositions.controller");


router.get('/all', propositionController.getAllPropositions);
router.post('/new', propositionController.postProposition);
router.get('/:id', propositionController.getPropositionById);
router.patch('/:id', propositionController.patchProposition);
router.delete('/:id', propositionController.deleteProposition);


module.exports = router;
 