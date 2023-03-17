import AppStorage from "./AppStorage";
import Token from "./Token";
import axios from 'axios';
/* eslint-disable */
class User{
    login(data, router, store){
        axios
          .post("/api/v1/users/login", data)
          .then((res) => {
            this.responseAfterLogin(res);
            router.go({ name: "Home-page" });
            console.log(router);

             const payload = {
               type: "success",
               message: 'Login successfully done!!',
             };
             store.dispatch("addNotification", payload);
          })
          .catch((error) => {
             const payload = {
               type: "failure",
               message:'email or password does not match',
             };
             store.dispatch("addNotification", payload);
            console.log(error.response.data);
          });
    }

    register(data, router, store){
        axios
          .post("/api/v1/users/signup", data)
          .then((res) => {
            this.responseAfterLogin(res);
            // router.go({ name: "Home-page" });
            console.log(router);
            const payload = {
              type: "success",
              message: "Register successfully done",
            };
            store.dispatch("addNotification", payload);
          })
          .catch((error) => {
            const payload = {
              type: "failure",
              message: "Something Wrong",
            };
            store.dispatch("addNotification", payload);
            console.log(error.response.data);
          });
    }

    responseAfterLogin(res){
        console.log(res);
        const token = res.data.token;
        const name = res.data.name;
        const uid = res.data._id;
        const email = res.data.email;
       

        if(Token.isValid(token)){
            AppStorage.store(name, token, uid, email);
        }
    }


    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
          return Token.isValid(storedToken)? true : this.logOut();
        }else{
            this.logOut();

        }
        return false;
    }


    logedIn(){
        return this.hasToken();
    }

    logOut(){
        AppStorage.clear();
    }

    name(){
        if(this.logedIn()){
            return AppStorage.getUser();
        }
    }

    id(){
        if(this.logedIn()){
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(id){
        return this.id() == id;
    }
    uid(){
        return AppStorage.getUid();
    }

    admin(){
        return AppStorage.getAdmin() == 'admin';
    }

    userinfo(){
      return AppStorage.getUserInfo();
    }



}

export default User = new User();
/* eslint-enable */
