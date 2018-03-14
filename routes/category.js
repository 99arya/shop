    //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
 var express = require("express");
 var router = express.Router()
 var Cat   = require("../models/category")
 var Product   = require("../models/product")


  
  // ====new category=====

  router.post("/api/newcategory", function(req, res) {

      var name = req.body.name;



      Cat.count(function(err, count) {
          if (err) {
              console.log(err)
          } else {

              count = count++;
              var newCat = {
                  name: name,
                  cn: count
              }
              Cat.create(newCat, function(err, newlyCreated) {
                  if (err) {
                      console.log(err)
                  } else {
                      // res.redirect("meals")
                      res.json(newlyCreated)

                  }
              });


          }
      })



  })

 

  // ==================================================================
  //category end
  //===================================================================
 // ====PRODUCTS====

  router.get("/category/:id", function(req, res) {
      
              Product.find({
                  catid: req.params.id
              }, function(err, catProducts) {
                  if (err) {
                      console.log(err)
                  } else {
                      
                     Cat.find({}, function(err, allCats) {
                      if (err) {
                          console.log(err)
                      } else {
                             Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                      
                      
                              res.render("products", {
                                  cats: allCats,
                                  catproducts: catProducts,
                                  products: allProducts
                              })
                          }
                      })
   }
                      })




          }

      })
  })

  // =====get categories===

  router.get("/api/getcategories", function(req, res) {
      Cat.find({}, function(err, allCats) {
          if (err) {
              console.log(err)
          } else {
              res.json(allCats)
          }
      })
  })

 
  // ====PRODUCTS====

  router.get("/categories", function(req, res) {
      
     Product.find({}, function(err, allProducts){
                            if(err){
                                console.log("Error cannot find products "+err);
                            } else {
                                
                            Cat.find({}, function(err, allCats) {
                                if(err){
                                    console.log("Error cannot find categories "+err)
                                } else {
    
                            res.render("all-products", {products:allProducts, cats:allCats});
                            
                                }
                            });
                            
                            }
                          });


  })



  module.exports = router;
  
      
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  