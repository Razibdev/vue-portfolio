/* eslint-disable */
import axios from "axios";
class AppStorage {
  storeToken(token) {
    localStorage.setItem("token", token);
  }

  storeName(name) {
    localStorage.setItem("name", name);
  }

  storeEmail(email) {
    localStorage.setItem("email", email);
  }

  storeUID(uid) {
    if (uid) {
      localStorage.setItem("uid", uid);
    }
  }

  store(name, token, uid, email) {
    this.storeToken(token);
    this.storeName(name);
    this.storeEmail(email);
    this.storeUID(uid);
  }

  clear() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("uid");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getName() {
    return localStorage.getItem("name");
  }

  getAdmin() {
    return localStorage.getItem("role_name");
  }
  getUid() {
    return localStorage.getItem("uid");
  }

 async getUserInfo(){
    return await axios.get("/api/v1/users/user-info");
  }
}

export default AppStorage = new AppStorage();
/* eslint-enable */

