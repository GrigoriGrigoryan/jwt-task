import { Router } from "express";
import { body } from "express-validator";
import { authController } from "../controllers/auth";
import { authMiddleware } from "../middleware/auth";


export const authRouter = Router();

authRouter
   .post('/signin',  authController.login)
   .post('/signin/new_token', authMiddleware, authController.refresh)
   .post('/signup',
      body('email').isEmail(),
      body('password').isLength({min: 3, max: 32}),
      authController.register)
   .get('/info',authMiddleware, authController.getUserId)
   .get('/logout', authMiddleware, authController.logout)