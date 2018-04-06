const express = require('express');
const router = express.Router();
const controllerUsers = require("../controllers/users.controller");

const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

// get: show users:
router.get('/all', controllerUsers.getUsers);
router.get('/:id', controllerUsers.getUserById);

// router.get('/', controller.getUsers);
router.patch('/:id', controllerUsers.patchUser);
router.patch('/:id/addimg', upload.single('file'), controllerUsers.patchImageUser);

router.delete('/:id', controllerUsers.deleteUser);


module.exports = router;
