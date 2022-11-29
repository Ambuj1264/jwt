const express=require("express");
const router=express.Router();
const controler=require("../controlers/controler");
const auth = require("../middleware/auth");



router.post("/register", controler.registration );
  router.post("/login", controler.login); 
  router.post("/welcome", auth, controler.welcome);
module.exports=router;
