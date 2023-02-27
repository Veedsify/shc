const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.render('support')
})



module.exports = router;