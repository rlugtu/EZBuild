const db=require('../db/config');
const { one } = require('../db/config');

class User{
    constructor(user){
        this.id=user.id;
        this.username=user.username;
        this.email=user.email;
        this.password_digest=user.password_digest
    }
    
    static findByUserName(){
        return db.oneOrNone(`SELECT * FROM users WHERE username=$1`,username)
        .then(user=>{
            if(user) return new this(user);
            throw new Error('No user found');
        })
    }

    save(){
        return db.one(`INSERT INTO users 
        (username,password_digest,email)
        VALUES($/username/,$/password_digest/,$/email/) RETURNING *`,this)
        .then(user=>Object.assign(this,user));
    }
}

module.exports=User