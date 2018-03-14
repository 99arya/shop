  //=========================================================================================================================                                    
 //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
//===========================================================================================================================

/* global $ */

console.log("start all-products.js")
// all categories

//all categories
$(function(){
    

          $.post("/api/getproducts/" + 1 + "")
                             .done(function(data){
                                
                               
                                 console.log("In document.ready")
                                 $("#pnp").html("")
                                 console.log(data)
                                 
                                  
                                 $("#tot").html(data.page)
                                 $("#age").html(data.pages)
                                 
                                 var rew=Number(data.pages)
                                 
                                 var xyz=""
                                 data.docs.forEach(function(e){
                                     xyz =  "<div class='col-sm-6'><div class='shop-product'><div class='product-thumb'><a href='/product/"+e._id+"'><img src='"+e.image1+"' alt=''></a><div class='product-overlay'><a href='/product/"+e._id+"' class='btn btn-color-out btn-sm'>Add To Cart<i class='ti-bag'></i></a></div></div><div class='product-info'><h4 class='upper'><a href='/product/"+e._id+"'>"+e.name+"</a></h4><span>Rs. "+e.minPrice+"</span><div class='save-product'><a href='/product/"+e._id+"'><i class='icon-heart'></i></a></div></div></div></div>"
                                    
                               
                                    $("#pnp").append(xyz)
                                    xyz=""
                                    
                                    
                                 })
                                 
                                 
                                //  for(var i=2;i<=rew;i++){
                                        
                                //     $("#totalPagination").append("<li class='pageNumberLi'><a  value='"+i+"' href='javascript:void(0)'class='pagenumber'>"+i+"</a></li>")
                                //     }
                             
                                 
                                 
                                 
                                 
                             })
                })
                
                
                // ===================
              
                             
// ======================
                        $(".pagenumber").on("click", function(){
                            console.log("Now in click page number")
                          var x= $(this).text()
                          $('.active').removeClass('active')

                          $(this).parent().addClass('active')
                             
                             $.post("/api/getproducts/" + x + "")
                             .done(function(data){
                                 $("#pnp").html("")
                                 console.log(data.page)
                                 console.log(data.pages)
                                 
                                 var rew=data.pages
                                 $("#age").html(data.pages)
                                 $("#tot").html(data.page)
                                           window.location.href="#top"

                                 data.docs.forEach(function(e){
                                    var xyz =  "<div class='col-sm-6'><div class='shop-product'><div class='product-thumb'><a href='/product/"+e._id+"'><img src='"+e.image1+"' alt=''></a><div class='product-overlay'><a href='/product/"+e._id+"' class='btn btn-color-out btn-sm'>Add To Cart<i class='ti-bag'></i></a></div></div><div class='product-info'><h4 class='upper'><a href='/product/"+e._id+"'>"+e.name+"</a></h4><span>Rs. "+e.minPrice+"</span><div class='save-product'><a href='/product/"+e._id+"'><i class='icon-heart'></i></a></div></div></div></div>"
                
                               
                                    $("#pnp").append(xyz)
                                    
                                    
                                    
                                    
                                 })
                                //  $("#totalPagination")
                                //     .html("")
                                    
                                    
                                //  for(var i=2;i<=rew;i++){
                                        
                                //     $("#totalPagination").append("<li class='pageNumberLi' value='"+i+"'><a class='pagenumber' href='javascript:void(0)'>"+i+"</a></li>")
                                //     }
                             
                                 
                                 
                                 
                                 
                             })
						 
						})
						
						
  //=========================================================================================================================                                    
 //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
//===========================================================================================================================
