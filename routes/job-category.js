const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.render('job-category')
})






module.exports = router;