import { MongoDBProducts } from '../daos/products/productsDao.js'
import dotenv from 'dotenv'
dotenv.config()

export default class ProductsFactory{
    static getDao(){
        return new MongoDBProducts()
    }
}