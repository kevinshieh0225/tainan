var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
   
      app.get('/signup', authController.signup);
      app.get('/signin', authController.signin);
      console.log('test');
      app.post('/signup', passport.authenticate('local-signup',{
        //console.log('passportauthen')
        successRedirect: '/dashboard',

        failureRedirect: '/signup'
      }
      
      ));
      app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signin'
      }
 
      ));

      app.get('/dashboard', isLoggedIn, authController.dashboard);
      app.get('/logout', authController.logout);
        
      
      function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
          return next();

        res.redirect('/signin');

      }
        
}
