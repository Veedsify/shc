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
const instructor = require('./instructor')                                                    
const student = require('./student')                                                    
const checkout = require('./checkout')                                                    
                                              


router.use('/blog', blog)
router.use('/about', about)
router.use('/course', course)
router.use('/pricing', pricing)
router.use('/faq', faq)
router.use('/support', support)
router.use('/login', login)
router.use('/register', register)
router.use('/instructor', instructor)
router.use('/student', student)
router.use('/checkout', checkout)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
