$(document).ready (function(){
            $("#success-alert").hide();
            
 });



// ===============GET CATEGORIES=======

   var url="/api/getcategories"
        $.getJSON(url,
    function (json) {
        
        
        
        console.log(json)
        
        
        var category = $("#category");
            $.each(json, function() {
                category.append($("<option />").val(this._id).text(this.name));
            });
        
    
        
    });
    
	              
// ===============POST CATEGORIES=======
              
              
              $('#addCategory').click(function () {
                var name = $('#categoryName').val();
                
 
                $.ajax({
                    url: '/api/newcategory',
                    type: "POST",
                    data: {name},
                    dataType: 'json',
                    success: function (data) {
                        
                       $('#categoryName').val("");
                        ;
                                 window.location.href="#top"

                       var name = data.name
                       
                       var xyz = "<div role='alert' id='success-alert' class='alert alert-success alert-dismissible alert-colored'>"+
                "<button type='button' data-dismiss='alert' aria-label='Close' class='close'><i class='ti-close'></i>"+
                "</button><strong>Well done!</strong> You have successfully added a new Category <strong>"+name+".</strong></div>"
                
                       
                       $("#alertMsg").append(xyz)
                       
                       
                       $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
               $("#success-alert").slideUp(500);
                });
                       
                       
                    }
                });
           
           
           
            });
            
     

            
            
// ===============POST PRODUCT=======
            
            
              $('#addProduct').click(function () {
                var name = $('#name').val();
                
                
                 var maxPrice           = $('#maxPrice').val();
                 var minPrice           = $('#minPrice').val();
                 
                 var catName            =  $("#category option:selected").text();
                 var catid              =  $("#category option:selected").val();
                 var sku                =  $('#sku').val();
                 
                 var image1             =  $('#image1').val();
                 var image2             =  $('#image2').val();
                 var image3             = $('#image3').val(); 
                 
                 var shortDetail        = $('#shortDetail').val(); 
                 
                 var longDetail         = $('#longDetail').val(); 
                 
                 var pLength            = $('#pLength').val(); 
                 var pWidth             = $('#pWidth').val(); 
                 var pWeight            = $('#pWeight       ').val(); 
                 
                 
                 
                
                
                
                $.ajax({
                    url: '/api/newproduct',
                    type: "POST",
                    data: {
                        name,
                        maxPrice,        
                        minPrice,        
                        catName,         
                        catid,            
                        sku,             
                        image1,           
                        image2,           
                        image3,           
                        shortDetail,      
                        longDetail,       
                        pLength,          
                        pWidth,           
                        pWeight          


                        
                    },
                    dataType: 'json',
                    success: function (data) {
                       
                       
                       
                    $('#name').val("");
                    $('#maxPrice').val("");
                    $('#minPrice').val("");
                     
                     $('#sku').val("");
                     $('#image1').val("");
                     $('#image2').val("");
                    $('#image3').val(""); 
                    $('#shortDetail').val(""); 
                    $('#longDetail').val(""); 
                    $('#pLength').val(""); 
                    $('#pWidth').val(""); 
                    $('#pWeight').val(""); 
                        var name = data.name
                       
                                 window.location.href="#top"

                         
                       var xyz = "<div role='alert' id='success-alert' class='alert alert-success alert-dismissible alert-colored'>"+
                                    "<button type='button' data-dismiss='alert' aria-label='Close' class='close'><i class='ti-close'></i>"+
                                    "</button><strong>Well done!</strong> You have successfully added a new Product <strong>"+name+".</strong></div>"
                
                       
                       $("#alertMsg").append(xyz)
                       
                       
                       $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
               $("#success-alert").slideUp(500);
                });
                       
                       
                    }
                });
            });
            
            
                     
            
              $('#editProduct').click(function () {
                var name = $('#name').val();
                
                
                 var price   = $('#price').val();
                 var prodetail = $('#prodetail').val();
                 
                
                 var sku     =  $('#sku').val();
                 
                 var image1   =  $('#image1').val();
              
                 
                 
                 var prodhtml = $('#prodhtml').val();
                var productId =  $('#prodId').val();
                
                
                $.ajax({
                    url: "/product/" + productId,
                    type: "PUT",
                    data: {
                        name,
                      
                        price  , 
                        prodetail,
                        
                        sku     ,
                        image1,
                        
                        prodhtml,
                        

                        
                    },
                    dataType: 'json',
                    success: function (data) {
                       var id = data._id
                       
                       window.location.href = "/product/" + id
                       console.log(data)
                       
                       
                       
                       
                    }
                });
            });
         