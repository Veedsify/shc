const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.render('course-grid')
})

router.get('/:course', (req, res, next)=>{
    res.render('course-details')
})


module.exports = router;