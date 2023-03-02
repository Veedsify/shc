const express = require('express');
const router = express.Router();


router.get('course-list', (req, res, next)=>{
    res.render('course-list')
})
router.get('/student', (req, res, next)=>{
    res.render('course-student')
})
router.get('/message', (req, res, next)=>{
    res.render('course-message')
})
router.get('/wishlist', (req, res, next)=>{
    res.render('course-wishlist')
})
router.get('/lesson', (req, res, next)=>{
    res.render('course-lesson')
})
router.get('/grid', (req, res, next)=>{
    res.render('course-grid')
})
router.get('/details', (req, res, next)=>{
    res.render('course-details')
})


module.exports = router;