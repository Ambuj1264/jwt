const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/validation",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("connection statbilist ")).catch(e=>console.log("mongoose err",e.message));
