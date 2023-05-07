const { login } = require('../auth/auth');
const { verify } = require('../auth/auth');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/courseworkControllers.js');

router.get('/register', controller.show_register_page);
router.post('/register', controller.post_new_user);
router.get('/login', controller.show_login_page);
router.post('/login', login, controller.handle_login);
router.get("/logout", verify, controller.logout);
router.get("/loggedIn", verify, controller.loggedIn_landing);
router.get("/", controller.landing_page);

router.get('/peter', controller.peters_entries);
router.get('/newNutrition', verify, controller.show_new_entries_nutrition);
router.get('/newFitness', verify, controller.show_new_entries_fitness);
router.get('/newLifestyle', verify, controller.show_new_entries_lifestyle);

router.get("/loggedInNutrition", verify, controller.loggedIn_landing_nutrition);
router.get("/loggedInFitness", verify, controller.loggedIn_landing_fitness);
router.get("/loggedInLifestyle", verify, controller.loggedIn_landing_lifestyle);

router.post('/newNutrition', controller.post_new_entries_nutrition);
router.post('/newFitness', controller.post_new_entries_fitness);
router.post('/newLifestyle', controller.post_new_entries_lifestyle);
router.post('/new', controller.post_new_entry);


router.get('/posts/:author', controller.show_user_entries);


router.get('/nutrition', verify, controller.show_nutrition_page);
router.get('/fitness', verify, controller.show_fitness_page);
router.get('/lifestyle', verify, controller.show_lifestyle_page);

router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})

module.exports = router;