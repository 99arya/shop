   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  


var mongoose = require("mongoose"); 

 // ==================================================================
  //category start
  //===================================================================

  var reviewSchema = new mongoose.Schema({
    created: {type: Date, default: Date.now},
      rn: Number,
      name: String,
      email: String,
      star: String, 
      comment: String,
      productId:String
      

  })


    
    module.exports = mongoose.model("Review", reviewSchema)
    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  