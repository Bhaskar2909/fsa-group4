const express = require('express');
const LOG = require('../util/logger');

const locationRoutes = require('./location.routes');

LOG.info('routes/index.js: STARTING custom routes......');

const router = express.Router();

const appTitle = 'Full Stack App';
const appSubTitle = 'group-4';

/* GET home page. */
router.get('/', (req, res) => {
    return res.render('index.ejs', {
        title: appTitle,
        subTitle: appSubTitle,  
    });
});

router.get('/index', (req, res) => {
    return res.redirect('/');
});


try {
    router.use('/location', locationRoutes);
} catch (err) {
    LOG.error(`ERROR: ${err.message}`);
}

LOG.info('routes/index.js: ENDING custom routes......');

module.exports = router;