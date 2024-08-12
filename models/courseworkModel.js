const nedb = require('nedb');

const path = require('path')

const db = {}

const filePaths = {
    nutrition: path.join(__dirname, "../public", 'nutrition.db'),
    fitness: path.join(__dirname, "../public", 'fitness.db'),
    lifestyle: path.join(__dirname, "../public", 'lifestyle.db'),
    charity1: path.join(__dirname, "../public", 'charity1.db'),
    charity2: path.join(__dirname, "../public", 'charity2.db'),
    charity3: path.join(__dirname, "../public", 'charity3.db'),
    charity4: path.join(__dirname, "../public", 'charity4.db')
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

            this.charity1DB = new nedb({
                filename: filePaths.charity1,
                autoload: true,
                timestampData: true
            });
            console.log('Charity1 DB connected to ' + filePaths.charity1);

            this.charity2DB = new nedb({
                filename: filePaths.charity2,
                autoload: true,
                timestampData: true
            });
            console.log('Charity2 DB connected to ' + filePaths.charity2);
            
            this.charity3DB = new nedb({
                filename: filePaths.charity3,
                autoload: true,
                timestampData: true
            });
            console.log('Charity3 DB connected to ' + filePaths.charity3);
            
            this.charity4DB = new nedb({
                filename: filePaths.charity4,
                autoload: true,
                timestampData: true
            });
            console.log('Charity4 DB connected to ' + filePaths.charity4);
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

    getAllCharity1Entries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.charity1DB.find({}, function (err, charity1) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(charity1);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', charity1);
                }
            })
        })
    }

    getAllCharity2Entries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.charity2DB.find({}, function (err, charity2) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(charity2);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', charity2);
                }
            })
        })
    }

    
    getAllCharity3Entries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.charity3DB.find({}, function (err, charity3) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(charity3);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', charity3);
                }
            })
        })
    }

    getAllCharity4Entries() {
        //return a Promise object, which can be resolved or rejected 
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for the error, entries for data
            this.charity4DB.find({}, function (err, charity4) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(charity4);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', charity4);
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

    addCharity1Entry(author, subject, contents, price, quantity) {
        const entry = {
            author: author,
            subject: subject,
            contents: contents,
            price: price, // If price is needed in your model
            quantity: quantity, // If quantity is needed in your model
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.charity1DB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
    }
    

    addCharity2Entry(author, subject, contents, price, quantity) {
        const entry = {
            author: author,
            subject: subject,
            contents: contents,
            price: price, // If price is needed in your model
            quantity: quantity, // If quantity is needed in your model
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.charity2DB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
    }


    addCharity3Entry(author, subject, contents, price, quantity) {
        const entry = {
            author: author,
            subject: subject,
            contents: contents,
            price: price, // If price is needed in your model
            quantity: quantity, // If quantity is needed in your model
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.charity3DB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
    }
    

    addCharity4Entry(author, subject, contents, price, quantity) {
        const entry = {
            author: author,
            subject: subject,
            contents: contents,
            price: price, // If price is needed in your model
            quantity: quantity, // If quantity is needed in your model
            published: new Date().toISOString().split('T')[0]
        };
        console.log('entry created', entry);
        this.charity4DB.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        });
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