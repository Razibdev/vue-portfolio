import User from './User.js';

export default function auth({next, router}){
    const account_auth = User.admin();
    if(!account_auth){
        console.log('you are not admin');
       router.push('/');
    }
    return next();

}