const courseworkDAO = require('../models/courseworkModel');
const userDao = require('../models/userModel.js');
const db = new courseworkDAO();

db.init();

exports.show_register_page = function (req, res) {
    res.render("user/register");
} 


exports.show_nutrition_page = function(req, res) {
    // res.redirect('/nutrition.html');
    res.render('nutrition', {
        title: "Hyping Health Nutrition", 
        user: "user"
    });
}


exports.show_fitness_page = function(req, res) {
    // res.redirect('/fitness.html');
    res.render('fitness', {
        title: "Hyping Health Fitness", 
        user: "user"
    });
    // 
}


exports.show_lifestyle_page = function(req, res) {
    // res.redirect('/lifestyle.html');
    res.render('lifestyle', {
        title: "Hyping Health Healthy Lifestyle", 
        user: "user"
    });
}


exports.post_new_user = function (req, res) {
    const user = req.body.username;
    const password = req.body.pass;

    if (!user || !password) {
        res.send(401, 'no user or no password');
        return;
    }
    userDao.lookup(user, function (err, u) {
        if (u) {
            res.send(401, "User exists:", user);
            return;
        }
        userDao.create(user, password);
        console.log("register user", user, "password", password);
        res.redirect('/login');
    });
}


exports.show_login_page = function(req, res){
    res.render("user/login");
}


exports.handle_login = function (req, res){
    res.render('index', {
        title: "Hyping Health Fitness Homepage", 
        user: "user"
    });
}


exports.logout = function (red, res){
    res
        .clearCookie("jwt")
        .status(200)
        .redirect("/");
}


exports.show_new_entries_nutrition = function(req, res){
           db.getAllNutritionEntries()
            .then((list, user) => {
                res.render('newEntryNutrition', {
                    'title': 'New Nutrition Entry',
                    'nutritionDB': list,
                    'user': user
                });
                console.log('promise resolved');
            })
            .catch((err) => {
                console.log('praddNutritionEntryomise rejected', err);
            })

}


exports.show_new_entries_fitness = function(req, res){
    db.getAllFitnessEntries()
            .then((list, user) => {
                res.render('newEntryFitness', {
                    'title': 'New Fitness Entry',
                    'fitnessDB': list,
                    'user': user
                });
                console.log('promise resolved');
            })
            .catch((err) => {
                console.log('promise rejected', err);
            })
}


exports.show_new_entries_lifestyle = function(req, res){
    db.getAllLifestyleEntries()
            .then((list, user) => {
                res.render('newEntryLifestyle', {
                    'title': 'New Healthy Lifestyle Entry',
                    'lifestyleDB': list,
                    'user': user
                });
                console.log('promise resolved');
            })
            .catch((err) => {
                console.log('promise rejected', err);
            })
}


exports.loggedIn_landing = function (req, res){
    db.getAllEntries().then((list) =>{
        res.render("index", {
            title: "Guest Book",
            entries: list,
            user: "user"
        });
        console.log("promise resolved");
    })
    .catch((err)=>{
        console.log("promise rejeced", err);
    });
}


exports.entries_list = function (req, res) {
    res.send('<h1>Guestbook Messages</h1><p>Not yet implemented: will show a list of guestbook entries.</p>');
    db.getAllEntries();
}


exports.landing_page = function (req, res) {
    db.getAllEntries()
        .then((list, user) => {
            res.render('index', {
                'title': 'Guest book',
                'entries': list,
                'user': user
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}


exports.new_entries = function (req, res) {
    res.render('newEntry', {
        'title': 'Guestbook'
    })
}
 

exports.post_new_entry = function (req, res) {
    console.log('processing post-new_entry conroller');
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
    db.addEntry(req.body.author, req.body.subject, req.body.contents);
    res.redirect("/loggedIn");
}


exports.post_new_entries_nutrition = function (req, res) {
    console.log('processing post-new_entries_nutrition conroller');
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
    db.addNutritionEntry(req.body.author, req.body.subject, req.body.contents, req.body.completionDate);
    res.redirect("/loggedInNutrition");
}


exports.post_new_entries_fitness = function (req, res) {
    console.log('processing post-new_entries_fitness conroller');
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
    db.addFitnessEntry(req.body.author, req.body.subject, req.body.contents, req.body.completionDate);
    res.redirect("/loggedInFitness");
}


exports.post_new_entries_lifestyle = function (req, res) {
    console.log('processing post-new_entries_lifestyle conroller');
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
    db.addLifestyleEntry(req.body.author, req.body.subject, req.body.contents, req.body.completionDate);
    res.redirect("/loggedInLifestyle");
}


exports.loggedIn_landing_nutrition = function (req, res){
    db.getAllNutritionEntries().then((list) =>{
        res.render("nutrition", {
            title: "Hyping Health Nutrition",
            nutrition: list,
            user: "user"
        });
        console.log("promise resolved");
    })
    .catch((err)=>{
        console.log("promise rejeced", err);
    });
}


exports.loggedIn_landing_fitness = function (req, res){
    db.getAllFitnessEntries().then((list) =>{
        res.render("fitness", {
            title: "Hyping Health Fitness",
            fitness: list,
            user: "user"
        });
        console.log("promise resolved");
    })
    .catch((err)=>{
        console.log("promise rejeced", err);
    });
}


exports.loggedIn_landing_lifestyle = function (req, res){
    db.getAllLifestyleEntries().then((list) =>{
        res.render("lifestyle", {
            title: "Hyping Health Healthy Lifestyle",
            lifestyle: list,
            user: "user"
        });
        console.log("promise resolved");
    })
    .catch((err)=>{
        console.log("promise rejeced", err);
    });
}


exports.peters_entries = function (req, res) {
    res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
    db.getPeterEntries();
}


exports.show_user_entries = function (req, res) {
    console.log('filtering authors name', req.params.author);
    let user = req.params.author;
    db.getEntriesByUser(user).then(
        (entries) => {
            res.render('index', {
                'title': 'Hyping Health Homepage',
                'entries': entries
            });
        }).catch((err) => {
            console.log('error handling author posts', err);
        });
}

