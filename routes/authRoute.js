import express from 'express';
import {registerController,loginController,testController,forgotPassswordController} from '../controller/authController.js'

import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// router object 

const router = express.Router()
// routing
//register || post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login',loginController)

// Forgot Passsword || POST

router.post('/forgot-password',forgotPassswordController)

// test routes

router.get('/test',requireSignIn, isAdmin ,testController)

//protected route

router.get('/user-auth',requireSignIn,(req,res)=> {
  res.status(200).send({ok:true})
})
export default router