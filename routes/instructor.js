const express = require('express');
const router = express.Router();



router.get('/chat', (req, res, next)=>{
    res.render('instructor-chat')
})
router.get('/course', (req, res, next)=>{
    res.render('instructor-course')
})
router.get('/dashboard', (req, res, next)=>{
    res.render('instructor-dashboard')
})
router.get('/delete-profile', (req, res, next)=>{
    res.render('instructor-delete-profile')
})
router.get('/earnings', (req, res, next)=>{
    res.render('instructor-earnings')
})
router.get('/edit-profile', (req, res, next)=>{
    res.render('instructor-edit-profile')
})
router.get('/instructor-grid', (req, res, next)=>{
    res.render('instructor-grid')
})
router.get('/linked-accounts', (req, res, next)=>{
    res.render('instructor-linked-account')
})
router.get('/instructor-list', (req, res, next)=>{
    res.render('instructor-list')
})
router.get('/new-tickets', (req, res, next)=>{
    res.render('instructor-new-tickets')
})
router.get('/notification', (req, res, next)=>{
    res.render('instructor-notification')
})
router.get('/orders', (req, res, next)=>{
    res.render('instructor-orders')
})
router.get('/payouts', (req, res, next)=>{
    res.render('instructor-payouts')
})
router.get('/profile-privacy', (req, res, next)=>{
    res.render('instructor-profile-privacy')
})
router.get('/profile', (req, res, next)=>{
    res.render('instructor-profile')
})
router.get('/reviews', (req, res, next)=>{
    res.render('instructor-reviews')
})
router.get('/security', (req, res, next)=>{
    res.render('instructor-security')
})
router.get('/social', (req, res, next)=>{
    res.render('instructor-social-profiles')
})
router.get('/course', (req, res, next)=>{
    res.render('instructor-course')
})
router.get('/student-grid', (req, res, next)=>{
    res.render('instructor-student-grid')
})
router.get('/student-list', (req, res, next)=>{
    res.render('instructor-student-list')
})
router.get('/tickets', (req, res, next)=>{
    res.render('instructor-tickets')
})




module.exports = router;