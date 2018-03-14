
$(document).ready (function(){
            $("#success-alert").hide();
            
 });


$("#sendReview").on("click", function(){
    
    var name        =    $("#author").val()
    var email       =   $("#email").val()
    var star        =    $('#star').find(":selected").val();
    console.log("yo "+star)
    var comment     = $("#comment").val()
    
    var prId= $("#prId").text()
  var url="/review/"+prId
  
  
  
    $.ajax({
      type: "POST",
      url: url,
      data: {name,  
            email,  
            star,   
            comment},
      
      dataType: 'json',
      success: function(data){
          
             $("#author").val("")
              $("#email").val("")
               $("#star").val("")
            $("#comment").val("")

          window.location.href="#top"
          
          var name = data.name
                       
                       
                         
                       var xyz = "<div role='alert' id='success-alert' class='alert alert-success alert-dismissible alert-colored'>"+
                                    "<button type='button' data-dismiss='alert' aria-label='Close' class='close'><i class='ti-close'></i>"+
                                    "</button>Well done! <strong>"+name+".</strong> You have successfully added a new Review </div>"
                
                       
                       $("#alertMsg").append(xyz)
                       
                       
                       $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
               $("#success-alert").slideUp(500);
                });
                       
      }
      
      
      
    });
    
})