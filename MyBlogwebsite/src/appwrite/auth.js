import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// create class with 2 properties

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwrieProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // return userAccount;
        // another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // check the user login or not

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // throw(error)
      // customize error
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null; // try catch error suppose any return value so null
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService(); // create object (authservice) -- using new keyword

export default authService; // and export
