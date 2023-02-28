var express = require('express');
var router = express.Router();
const blog = require('./blog')
const about = require('./about')
const course = require('./course')
const pricing = require('./pricing')
const faq = require('./faq')                           
const support = require('./support')                           
const login = require('./login')                           
const register = require('./register')                           
const job_category = require('./job-category')                           
const notification = require('./notification')                           
const wishlist = require('./wishlist')                           
const come = require('./coming')                           
const cart = require('./cart')                           
const checkout = require('./checkout')                           
const forgot = require('./forgot')                           
const terms = require('./terms')                           
const privacy = require('./privacy-policy')                           


router.use('/blog', blog)
router.use('/about', about)
router.use('/course', course)
router.use('/pricing', pricing)
router.use('/faq', faq)
router.use('/support', support)
router.use('/login', login)
router.use('/register', register)
router.use('/notification', notification)
router.use('/job_category', job_category)
router.use('/checkout', checkout)
router.use('/cart', cart)
router.use('/wishlist', wishlist)
router.use('/forgot-password', forgot)
router.use('/privacy-policy', privacy)
router.use('/terms', terms)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
