const express = require("express")
const userRouter = express.Router();
const {getAbout,postAbout,patchAbout,deleteAbout} = require("../controller/usercontroller")

userRouter.route('/about').get(getAbout).post(postAbout);
userRouter.route('/about/:id').patch(patchAbout).delete(deleteAbout);


module.exports = userRouter;