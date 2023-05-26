let providers = require('../models/providers.models');
const Provider = require('../db/db');
const { ObjectId } = require('mongodb');

// Util funcs

// Check if the list is empty
const isEmptyList = (obj) => {
    return (!obj || obj.length === 0 || Object.keys(obj).length === 0);
};


const handleError = (error, res) => {
    res.status(200);
    res.send('Something went wrong. \n' + error);

};

// //Check for existing provider
// const existsProvider = (id) => {
//     return providers.find( provider => provider.id == id);
// };

// // Get unique provider id
// const getUniqueId = (providers) => {
//     const min = 100000;
//     const max = 999999;
//     let id;
//     do {
//         id = Math.floor(Math.random() * (max - min) + min);
//     } while (existsProvider(id));

//     return id;
// };

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// POST
// url: /api/providers
module.exports.create = (req, res) => {
    try {
        let provider = req.body;

        Provider.create(provider)
            .then(result => {
                res.status(200);
                res.send(result);
            })
            .catch(err => {
                handleError(err, res);
            });
    } catch (err) {
        handleError(err, res);
    }
    // if (isEmptyList(providers)) {
    //     providers = [];
    // }

    // Create random ID
    // let id = req.body.id;
    // if (id === null) {
    //     id = getUniqueId();
    // } else if (existsProvider(id)) {
    //     res.status(400);
    //     res.send('Duplicate id is not allowed');
    //     id = getUniqueId();
    // }


    // provider.id = id;

    // Add new provider to the list
    // providers.push(provider);

};

// GET
// url: /api/providers
module.exports.readAll = (req, res) => {

    try {
        Provider.find()
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(err => handleError(err, res));
    } catch (err) {
        handleError(err, res);
    }


};

// GET ONE
// url: /api/providers/123
module.exports.readOne = (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        Provider.find({ _id: id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('Can`t find requested id.');
                }

                // let provider = providers.find(provider => provider.id == id);
                res.status(200);
                res.send(result);
            })
            .catch(err => {
                handleError(err, res);
            })


    } catch (err) {
        handleError(err, res);
    }

};

// PUT
// url: /api/providers/123
module.exports.update = (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let provider = req.body;
        Provider.findOneAndUpdate({ _id: id }, provider, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty, can`t update.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(err => {
                handleError(err, res);
            })
    } catch (err) {
        handleError(err, res);
    }
};

// DELETE ONE
// url: /api/providers/123
module.exports.deleteOne = (req, res) => {

    try {

        let id = new ObjectId(req.params.id);
        Provider.findOneAndDelete({ _id: id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty, can`t delete.');
                }
                res.status(200);
                res.send(result);
            })
            .catch(err => {
                handleError(err, res);
            });
    } catch (err) {
        handleError(err, res);
    }
};

// DELETE ALL
// url: /api/providers
module.exports.deleteAll = (req, res) => {

    try {
        Provider.deleteMany({})
            .then(result => {
                if (result.deletedCount === 0) {
                    res.status(400);
                    res.send('List is empty, can`t delete.');
                }
                providers = [];

                res.status(200);
                res.send('All providers deleted!');
            })
            .catch(err => {
                handleError(err, res);
            });
    } catch (err) {
        handleError(err, res);
    }


};