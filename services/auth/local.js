const passport=require('passport');
const localStrategy=require('passport-local').Strategy;

const init=require('./passport');
const User=require('../../models/User');
const authHelpers=require('./authHelpers');

const options={};

init();

passport.use(
    new localStrategy(options,(username,password,done)=>{
        User.findByUserName(username)
        .then(user=>{
            if(!user){
                return done(null,false);
            }
            if(!authHelpers.comparePass(password,user.password_digest)){
                return done(null,false)
            }
            else{
                return done(null,user)
            }
                
        })

    })
)