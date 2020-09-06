var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
  
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function(user, done){
    done(null, user.id);
  }); 

  passport.deserializeUser(function(id, done){
    User.findById(id).then(function(user){
      if(user){
        done(null, user.get());
      }
      else{
        done(user.errors,null);
      }
    });
  });

  //LOCAL SIGNUP
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      //allow us to pass back the entire request to the callback
      passReqToCallback: true        
    },

    //hamdle storing a user's details
    function(req, email, password, done){
      
      //add hashed password generating function
      var generateHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      }

      User.findOne({
        where: {
          email: email
        }
      }).then(function(user){
        if(user){
          return done(null, false,{
            message: 'That email is already taken'
          });
        }
        else{
          var userPassword = generateHash(password);

          var data =
            {
              email: email,
              password: userPassword,
              username: req.body.username,
              lastname: req.body.lastname

            };
          
          //a Sequelized method for adding new entries to the database
          User.create(data).then(function(newUser, created){
            if(!newUser) {
              return done(null, false);
            }
          

            if(newUser) {
              return done(null, newUser);
            }
          });        
        }
      });  
    }





  ))

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
 
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      // allows us to pass back the entire request to the callback
      passReqToCallback: true 
    },
 
 
    function(req, email, password, done) {
      var User = user;
      var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
      }
 
        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (!user) {
            return done(null, false, {
              message: 'Email does not exist'
            });
 
          }
          //compare the password entered with the byCrypt
          if (!isValidPassword(user.password, password)) {
            return done(null, false, {
                message: 'Incorrect password.'
            });
          }
 
 
          var userinfo = user.get();
          return done(null, userinfo);
 
 
        }).catch(function(err) {
          console.log("Error:", err);
          return done(null, false, {
              message: 'Something went wrong with your Signin'
          });
        });
    }
  ));
}



