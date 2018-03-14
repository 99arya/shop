  //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
  //===========================================================================================================================
  var express = require("express");
  var app = express();
  var $ = require("jquery");
  var bodyParser = require("body-parser");
  var mongoose = require("mongoose");
  var path = require('path');
  var methodOverride = require("method-override");
  var mongoosePaginate = require('mongoose-paginate');
  var flash = require("connect-flash");

  
  var passport = require("passport"), 
      LocalStratregy=require("passport-local"),
      User=require("./models/user");
      
      
  //=========================================================================================================================                                    
 //  PASSPORT CONFIGURATION
//=========================================================================================================================                                    


app.use(require("express-session")({
    secret:"KindlyRememberYourPassword",
    resave: false,
    saveUninitialized: false
}))

  app.use(passport.initialize());
  app.use(passport.session())
  passport.use(new LocalStratregy(User.authenticate()))
  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())
  app.use(bodyParser.json());
  
  
  var generalRoutes = require("./routes/general")
  var productRoutes = require("./routes/product")
//   var requestRoutes = require("./routes/request")
  var categoryRoutes = require("./routes/category")
//   var contactRoutes = require("./routes/contact")




 mongoose.connect("mongodb://megha:path@ds211309.mlab.com:11309/meghapath")

// ====APP.USE====

  app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(__dirname + '/views'));
  app.use(bodyParser.json());
  app.use(methodOverride("_method"));
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  
  // app.use(function(req, res, next){
  //     res.locals.currentUser = req.user;
  //     next();
  // });

 app.use(flash());
  // =========================================================end
 

  



app.use(generalRoutes)
app.use(productRoutes)
// app.use(requestRoutes)
app.use(categoryRoutes)
// app.use(contactRoutes)
 



  app.listen(process.env.PORT,process.env.IP, function() {
      console.log("Sumit's Server started! App is running! For assistance ping me at aryasumit145@gmail.com ");

  });



  //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
  //===========================================================================================================================