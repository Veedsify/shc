const express = require('express');
const router = express.Router();



router.get('/student-profile', (req, res, next)=>{
    res.render('student-profile')
})

router.get('/student-list', (req, res, next)=>{
    res.render('students-list')
})


// STUDENTS SETTINGS

router.get('/setting-edit-profile', (req, res, next)=>{
    res.render('setting-edit-profile')
})

router.get('/setting-student-accounts', (req, res, next)=>{
    res.render('setting-student-accounts')
})

router.get('/setting-student-billing', (req, res, next)=>{
    res.render('setting-student-billing')
})

router.get('/delete-profile', (req, res, next)=>{
    res.render('setting-student-delete-profile')
})
router.get('/deposit-student-dashboard', (req, res, next)=>{
    res.render('deposit-student-dashboard')
})

router.get('/setting-student-invoice', (req, res, next)=>{
    res.render('setting-student-invoice')
})

router.get('/notification', (req, res, next)=>{
    res.render('setting-student-notification')
})

router.get('/setting-student-payment', (req, res, next)=>{
    res.render('setting-student-payment')
})

router.get('/setting-student-privacy', (req, res, next)=>{
    res.render('setting-student-privacy')
})

router.get('/setting-student-referral', (req, res, next)=>{
    res.render('setting-student-referral')
})

router.get('/setting-student-security', (req, res, next)=>{
    res.render('setting-student-security')
})

router.get('/setting-student-social-profile', (req, res, next)=>{
    res.render('setting-student-social-profile')
})

router.get('/setting-student-subscription', (req, res, next)=>{
    res.render('setting-student-subscription')
})

router.get('/setting-support-tickets', (req, res, next)=>{
    res.render('setting-support-new-tickets')
})


module.exports = router;