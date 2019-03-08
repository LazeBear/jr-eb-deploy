const express = require('express');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const courseRoute = require('./routes/course');
const authGuard = require('./middleware/authGuard');

const router = express.Router();

router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/courses', authGuard, courseRoute);

module.exports = router;
