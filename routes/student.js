const express = require('express');
const router = express.Router();



router.get('/student-profile', (req, res, next)=>{
    res.render('student-profile')
})
router.get('/student-grid', (req, res, next)=>{
    res.render('students-grid')
})
router.get('/student-list', (req, res, next)=>{
    res.render('students-list')
})


// STUDENTS SETTINGS

router.get('/edit-profile', (req, res, next)=>{
    res.render('setting-edit-profile')
})
router.get('/linked-accounts', (req, res, next)=>{
    res.render('setting-student-accounts')
})
router.get('/billing', (req, res, next)=>{
    res.render('setting-student-billing')
})
router.get('/delete-profile', (req, res, next)=>{
    res.render('setting-student-delete-profile')
})
router.get('/invoice', (req, res, next)=>{
    res.render('setting-student-invoice')
})
router.get('/notification', (req, res, next)=>{
    res.render('setting-student-notification')
})
router.get('/payment', (req, res, next)=>{
    res.render('setting-student-payment')
})
router.get('/privacy', (req, res, next)=>{
    res.render('setting-student-privacy')
})
router.get('/referral', (req, res, next)=>{
    res.render('setting-student-referral')
})
router.get('/security', (req, res, next)=>{
    res.render('setting-student-security')
})
router.get('/social', (req, res, next)=>{
    res.render('setting-student-social-profile')
})
router.get('/subscription', (req, res, next)=>{
    res.render('setting-student-subscription')
})
router.get('/support-new-tickets', (req, res, next)=>{
    res.render('setting-support-new-tickets')
})
router.get('/support-tickets', (req, res, next)=>{
    res.render('setting-support-tickets')
})


module.exports = router;