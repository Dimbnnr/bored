const express = require('express');
const router = express.Router();
const controller = require("../controllers/auth.controller");
const controllerUsers = require("../controllers/users.controller");

const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });


router.post("/signup", upload.single("file"), controller.signup);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.get("/loggedin", controller.loggedin)

// get: show users:
router.get('/all', controllerUsers.getUsers);
router.get('/:id', controllerUsers.getUserById);




// router.get('/', controller.getUsers);
router.patch('/:id', controllerUsers.patchUser);
router.patch('/:id/addimg', upload.single('file'), controllerUsers.patchImageUser);
router.delete('/:id', controllerUsers.deleteUser);




module.exports = router;
