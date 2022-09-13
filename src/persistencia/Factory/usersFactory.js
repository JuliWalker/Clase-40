import { MongoDBUsers } from '../daos/users/usersDao'
import dotenv from 'dotenv'
dotenv.config()

export default class UsersFactory{
    static getDao(){
        return new MongoDBUsers()
    }
}