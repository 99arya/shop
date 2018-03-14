   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
 var mongoose = require("mongoose"); 
 var mongoosePaginate = require('mongoose-paginate');

  // =====================================================================
  //  product beginning
  // =======================================================================


  var productSchema = new mongoose.Schema({
        
      cn: Number,
      catName: String,
      catid: String,
      
      pn: Number,
      name: String,
      maxPrice: Number,
      minPrice: Number,
      
      shortDetail: String,
      longDetail: String,
      
      sku: String,
      
      pLength: String,
      pWidth: String,
      pWeight: String,
      
      image1: String,
      image2: String,
      image3: String,
      image4: String,

      reviews:[{
        created: {type: Date, default: Date.now},
          rn: Number,
          name: String,
          email: String,
          star: Number, 
          comment: String,
          productId:String
      }]


  })
//   productSchema.index({'$**': 'text'});
  productSchema.plugin(mongoosePaginate);

    module.exports = mongoose.model("Product", productSchema)

 



  // =====================================================================
  //  product ending
  // =======================================================================


    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  