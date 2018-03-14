   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  var express = require("express");
 var router = express.Router()
 var Cat   = require("../models/category")
 var Product   = require("../models/product")


  // ====HOME ======

router.get("/", function(req, res){
    
    Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("home", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
    
    
    
})



//   // ====PRODUCT SINGLE ======

// router.get("/product/:id", function(req, res){
//      Product.find({}, function(err, allProducts){
//                             if(err){
//                                 console.log("Error cannot find products "+err);
//                             } else {
                                
//                             Cat.find({}, function(err, allCats) {
//                                 if(err){
//                                     console.log("Error cannot find categories "+err)
//                                 } else {
    
//                             res.render("single-product", {products:allProducts, cats:allCats});
                            
//                                 }
//                             });
                            
//                             }
//                           });
                            
                        
                            
// })

  // ====CART ======

router.get("/cart", function(req, res){
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("cart", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
})


  // ====CHECKOUT ======

router.get("/checkout", function(req, res){
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("checkout", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
})



  // ====ABOUT ======

router.get("/about", function(req, res){
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("about", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
})


  // ====CONTACT ======

router.get("/contact", function(req, res){
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("contact", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
})

  // ====ADMIN ======

router.get("/admin", function(req, res){
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("admin", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
})


  // ====LOGIN ======

router.get("/login", function(req, res){
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("login", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });
                            
                        
                            
})








module.exports = router;
    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  