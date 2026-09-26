const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        success:false,
        message:"Toolbox api is working"
    })
})

module.exports = router;