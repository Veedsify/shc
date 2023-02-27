const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.render('pricing-plan')
})




module.exports = router;