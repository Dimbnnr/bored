const express = require('express');
const router = express.Router();
const controller = require("../controllers/propositions.controller");


router.post('/new', controller.postProposition);
router.get('/all', controller.getAllPropositions);
router.get('/:id', controller.getPropositionById);
router.get('/propuser' ,controller.getUserProposition)
router.patch('/:id', controller.patchProposition);
router.delete('/:id', controller.deleteProposition);


module.exports = router;
 