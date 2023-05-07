const nedb = require('nedb');

const path = require('path')

const db = {}

const filePaths = {
    nutrition: path.join(__dirname, "../public", 'nutrition.db'),
    fitness: path.join(__dirname, "../public", 'fitness.db'),
    lifestyle: path.join(__dirname, "../public", 'lifestyle.db')
};

class Coursework {

    constructor() {

        if (filePaths) {
            // create the three databases using the file paths
            this.nutritionDB = new nedb({
                filename: filePaths.nutrition,
                autoload: true,
                timestampData: true
            });
            console.log('Nutrition DB connected to ' + filePaths.nutrition);

            this.fitnessDB = new nedb({
                filename: filePaths.fitness,
                autoload: true,
                timestampData: true
            });
            console.log('Fitness DB connected to ' + filePaths.fitness);

            this.lifestyleDB = new nedb({
                filename: filePaths.lifestyle,
                autoload: true,
                timestampData: true
            });
            console.log('Lifestyle DB connected to ' + filePaths.lifestyle);
        } else {
            // if no file paths are provided, create an empty in-memory database
            this.db = new nedb();
        }

    }

    init() {

    }

    //a function to return all teh entries from teh database
    getAllEntries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.nutritionDB.find({}, function (err, nutrition) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(nutrition);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', nutrition);
                }
            })
        })
    }


    getAllNutritionEntries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.nutritionDB.find({}, function (err, nutrition) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(nutrition);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', nutrition);
                }
            })
        })
    }

    getAllFitnessEntries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.fitnessDB.find({}, function (err, fitness) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(fitness);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', fitness);
                }
            })
        })
    }

    getAllLifestyleEntries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.lifestyleDB.find({}, function (err, lifestyle) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(lifestyle);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', lifestyle);
                }
            })
        })
    }

    addNutritionEntry(author, subject, content, completionDate) {
        const entry = {
            author: author,
            subject: subject,
            contents: content,
            completionDate: completionDate,
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.nutritionDB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
    }

    addFitnessEntry(author, subject, content, completionDate) {
        const entry = {
            author: author,
            subject: subject,
            contents: content,
            completionDate: completionDate,
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.fitnessDB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
    }

    addLifestyleEntry(author, subject, content, completionDate) {
        const entry = {
            author: author,
            subject: subject,
            contents: content,
            completionDate: completionDate,
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.lifestyleDB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
    }


    getNutritionEntries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.nutritionDB.find({}, function (err, index) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(index);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', index);
                }
            })
        })
    }


    getEntriesByUser(authorName) {
        return new Promise((resolve, reject) => {
            this.db.find({ 'author': authorName }, function (err, index) {
                if (err) {
                    reject(err);
                } else {
                    resolve(index);
                    console.log('getEntriesByUser returns: ', index);
                }
            })
        })
    }
}

//make the module visible outside
module.exports = Coursework;