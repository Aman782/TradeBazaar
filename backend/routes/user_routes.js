import express from 'express';
import { addFunds, buyingStocks, getMargin, loginUser, logOutUser, registerUser } from '../controllers/user_controllers.js';
import { verify_JWT_Token } from '../middlewares/authentication.js';
const router = express.Router();

router.route('/register-user').post(registerUser);
router.route('/verify-user').post(loginUser);
router.route('/logout-user').get(verify_JWT_Token, logOutUser);
router.route('/get-margin').get(verify_JWT_Token, getMargin);
router.route('/buy-stock').post(verify_JWT_Token, buyingStocks);
router.route('/add-funds').post(verify_JWT_Token, addFunds);
export {router as userRoutes};