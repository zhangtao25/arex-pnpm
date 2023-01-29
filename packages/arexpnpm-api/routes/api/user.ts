// import bcrypt from "bcryptjs";
// import config from "config";
import { Router, Response,Request } from "express";
// import { check, validationResult } from "express-validator";
// import gravatar from "gravatar";
// import HttpStatusCodes from "http-status-codes";
// import jwt from "jsonwebtoken";

// import Payload from "../../types/Payload";
// import Request from "../../types/Request";
import User, { IUser, TUser } from "../../models/User";

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  "/",
  async (req: Request, res: Response) => {


      const query = await User.find({userName:'tzhangm@trip.com'})
      // console.log(query,'query')
    res.send(query)
  }
);

export default router;
