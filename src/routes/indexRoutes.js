import { Router } from "express";

const router = Router();

/** Routes */
/* import homeRouter from './home.js';
import carritosRouter from "./CarritosRoutes.js";
import loginRouter from './login.js';
import logoutRouter from './logout.js';
import registerRouter from './register.js';
import nodemailer from './nodemailer.js'; */

import ProductsRouter from "./routes/products";
const routerProducts = new ProductsRouter()

router.use('/productos',routerProducts.init())

/* router.use('/', homeRouter);
router.use('/carrito',carritosRouter)
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/registro', registerRouter);
router.use('/nodemailer', nodemailer); */

export default router;