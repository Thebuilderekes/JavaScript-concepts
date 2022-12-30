class User {

    constructor (email, name){
     this.email = email;
        this.name= name;
    }


    login(){
        console.log(`${this.name} has logged in with ${this.email}` )
        return this;
    }

    logOut(){
        console.log(`${this.name} has logged out ${this.email}` )

        return this;
    }



}

const userOne = new User("ekeopreberedugo@yahoo.com", "ekeopre")
const userTwo = new User("janet@yahoo.com", "janet")

userOne.login();

