const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.render('blog-grid')
})

router.get('/:article', (req, res, next)=>{
    res.render('blog-details')
})
router.get('/:article', (req, res, next)=>{
    res.render('blog-details')
})
router.get('/:article', (req, res, next)=>{
    res.render('blog-details')
})


module.exports = router;