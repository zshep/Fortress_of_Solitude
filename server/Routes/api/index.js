const router = require('express').Router();
const userRoutes = require('./user-routes');

//add in routes that we need...what routes do we need?
router.use('/users', userRoutes);

module.exports = router;
