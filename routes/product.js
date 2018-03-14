   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
 
 var express = require("express");
 var router = express.Router()
 var mongoosePaginate = require('mongoose-paginate');
 var Cat   = require("../models/category")
 var Product   = require("../models/product")
 var Review   = require("../models/review")

 // ====new product=====

      router.post("/api/newproduct", function(req, res) {

      var name          = req.body.name;
      var catName       = req.body.catName

      var catid         = req.body.catid;
      var maxPrice      = req.body.maxPrice
      var minPrice      = req.body.minPrice
      
      var shortDetail   = req.body.shortDetail
      var longDetail    = req.body.longDetail
      var sku           = req.body.sku
      
      var pLength       = req.body.pLength
      var pWidth        = req.body.pWidth
      var pWeight       = req.body.pWeight

      var image1        = req.body.image1
      var image2        = req.body.image2
      var image3        = req.body.image3
      var image4        = req.body.image4
    
    
    Product.count(function(err, count) {
          if (err) {
              console.log(err)
          } else {

              count = count++;

      var newProduct = {
            pn           :count,
            name         : name,
            catName      : catName,
            catid        : catid,
            maxPrice     : maxPrice,
            minPrice     : minPrice,
            shortDetail  : shortDetail,
            longDetail   : longDetail,
            sku          : sku,
            pLength      : pLength,
            pWidth       : pWidth,
            pWeight      : pWeight,
            image1       : image1,
            image2       : image2,
            image3       : image3,
            image4       : image4


      }

      Product.create(newProduct, function(err, newlyCreated) {
          if (err) {
              console.log(err)
          } else {
              res.json(newlyCreated)

          }
      });
        
              
          }
      });
  })




  // ====all products paginate====

  router.post("/api/getproducts/:id", function(req, res) {
      var pn = req.params.id;


      Product.paginate({}, {
          page: pn,
          limit: 2,
          sort: {
              _id: -1
          }
      }, function(err, result) {
          if (err) {
              console.log(err)
          } else {
              res.json(result)
          }

      });
  })




  // ====PRODUCT DETAIL====

  router.get("/product/:id", function(req, res) {
      Cat.find({}, function(err, allCats) {
          if (err) {
              console.log(err)
          } else {

              Product.findOne({
                  _id: req.params.id
              }, function(err, foundProduct) {
                  if (err) {
                      console.log("ERROR CANNOT FIND RODUCT BY ID" + err)
                  } else {
                        Product.find({}, function(err, allProducts) {
                              if (err) {
                                  console.log(err)
                              } else {

                      res.render("single-product", {
                          cats: allCats,
                          product: foundProduct,
                          products: allProducts
                      })

                  }


              })
    }


              })

          }
      })
  })


  //EDIT Product ROUTE
  router.get("/product/:id/edit", function(req, res) {

      Cat.find({}, function(err, allCats) {
          if (err) {
              console.log(err)
          } else {
              Product.findById(req.params.id, function(err, foundProduct) {

                  res.render("admin-edit", {
                      cats: allCats,
                      Product: foundProduct
                  });
              });




          }
      })
  })




  //UPDATE Product ROUTE
  router.put("/product/:id", function(req, res) {
      //find and update the correct Product
      console.log("WE ARE IN EDIT ROUTE")
      console.log("productId " + req.params.id)
      var name = req.body.name;

      var price = req.body.price
      var prodetail = req.body.prodetail

      var sku = req.body.sku

      var image1 = req.body.image1
      var productId = req.params.id



      var prodhtml = req.body.prodhtml


      var newProduct = {
          name: name,

          price: price,
          prodetail: prodetail,

          sku: sku,
          image1: image1,

          prodhtml: prodhtml

      }

      Product.findByIdAndUpdate(productId, newProduct, function(err, updatedProduct) {
          if (err) {
              res.redirect("/");
          } else {
              res.json(updatedProduct)
          }
      });
      //redirect so show page
  });

//   //DESTROY
//   app.delete("/product/:id/dest", function(req, res) {
//       Product.findByIdAndRemove(req.params.id, function(err) {
//           if (err) {
//               console.log(err);
//               res.redirect("/admin");
//           } else {

//               res.redirect("/admin")
//           }
//       });
//   });




        // ============================TEST START
        
        

router.post("/review/:id", function(req, res) {
    
    
    Review.count(function(err, count){
        if(err){
            console.log(err)
        } else {
        
            console.log("old -" + count)
         
                        
     Product.findById({_id: req.params.id},  function(err, product){
          if(err){
              console.log("cant find product " + err)
          } else {

            
                 
                var rn = count + 1;
                var name = req.body.name;
                var email = req.body.email;
                var star = req.body.star;
                var comment = req.body.comment;
                var productId = req.params.id;
                
                var newReview = new Review({productId:productId, rn:rn, name:name, email:email, star:star, comment:comment })
                
                console.log("new -" + rn)
                
                

                    Review.create(newReview, function(err, review) {
                        if(err){
                            console.log(err)
                        } else {
                            review.save();
                            product.reviews.push(review);
                            product.save()
                            console.log("done " )
                            req.flash("success", "Feedback Saved")
                            console.log(review)
                            res.json(review)
                            // res.redirect("/")
                        }
                    })
    
                    
                    
                }
            })
            
        }
    })
         
         //=====create end
         
         
        //===bill.update end
            
            
            
            
            
            
   
    //====count end
    
    
    
    


})
        
        // ============================TEST END
        



module.exports = router;

    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  