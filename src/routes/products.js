import {Router} from 'express'
import ProductsController from '../controllers/productsController.js'
import isAuth from '../utils/middleware/isAuth.js'

const router = Router()

 export default class ProductsRouter{
    constructor(){
        this.controllerProducts = new ProductsController()
    }

    init(){
        router.get('/', isAuth, this.controllerProducts.getProducts(req,res))
        router.get('/:id', isAuth, this.controllerProducts.getProductById(req, res))
        router.post('/', isAuth, this.controllerProducts.saveProduct(req,res))
        router.put('/:id', isAuth, this.controllerProducts.updateProduct(req, res))
        router.delete('/:id', isAuth, this.controllerProducts.deleteProduct(req, res))
    }

}