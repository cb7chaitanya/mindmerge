import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class Authentication {
    client = new Client();
    account;
    sessionId = null;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite error :: createAccount", error)
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        } catch(error){
            console.log("Appwrite error :: login", error)
        }
    }

    async getLogIn() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error :: getLogIn", error);
        }

        return null;
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite error :: logout", error);
        }
    }
}

const authService = new Authentication();

export default authService