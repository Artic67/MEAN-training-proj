let providers = require('../models/providers.models');

// Util funcs

// Check if the list is empty
const isEmptyList = (obj) => {
    return (!obj || obj.length === 0 || Object.keys(obj).length === 0);
};

//Check for existing provider
const existsProvider = (id) => {
    return providers.find( provider => provider.id == id);
};

// Get unique provider id
const getUniqueId = (providers) => {
    const min = 100000;
    const max = 999999;
    let id;
    do {
        id = Math.floor(Math.random() * (max - min) + min);
    } while (existsProvider(id));

    return id;
};

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// POST
// url: /api/providers
module.exports.create = (req, res) => {
    
    if (isEmptyList(providers)) {
        providers = [];
    }

    // Create random ID
    let id = req.body.id;
    if (id === null) {
        id = getUniqueId();
    } else if (existsProvider(id)) {
        res.status(400);
        res.send('Duplicate id is not allowed');
        id = getUniqueId();
    }
    
    let provider = req.body;
    provider.id = id;

    // Add new provider to the list
    providers.push(provider);
    res.status(200);
    res.send(provider);
};

// GET
// url: /api/providers
module.exports.readAll = (req, res) => {
    if (isEmptyList(providers)) {
        res.status(400);
        res.send('List is empty.');
    }
    res.status(200);
    res.send(providers);
};

// GET ONE
// url: /api/providers/123
module.exports.readOne = (req, res) => {
    let id = req.params.id;

    if (isEmptyList(providers)) {
        res.status(400);
        res.send('List is empty.');
    }

    if (!existsProvider(id)) {
        res.status(400);
        res.send('There is no provider with this id.');
    }
    
    let provider = providers.find(provider => provider.id == id);
    res.status(200);
    res.send(provider);
};

// PUT
// url: /api/providers/123
module.exports.update = (req, res) => {
    let id = req.params.id;

    if (isEmptyList(providers)) {
        res.status(400);
        res.send('List is empty, can`t update.');
    }

    if (!existsProvider(id)) {
        res.status(400);
        res.send('There is no provider with this id.');
    }

    let provider = providers.find(provider => provider.id == id);
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;

    provider.company.company_name = req.body.company.company_name;
    provider.company.address = req.body.company.address;
    provider.company.address2 = req.body.company.address2;
    provider.company.city = req.body.company.city;

    provider.company.state = req.body.company.state;
    provider.company.postal_code = req.body.company.postal_code;
    provider.company.phone = req.body.company.phone;
    provider.company.email = req.body.company.email;

    provider.company.description = req.body.company.description;
    provider.company.tagline = req.body.company.tagline;

    res.status(200);
    res.send(provider);
};

// DELETE ONE
// url: /api/providers/123
module.exports.deleteOne = (req, res) => {
    let id = req.params.id;
    
    if (isEmptyList(providers)) {
        res.status(400);
        res.send('List is empty, can`t delete.');
    }

    if (!existsProvider(id)) {
        res.status(400);
        res.send('There is no provider with this id.');
    }
    
    let provider = providers.find(provider => provider.id == id);
    let company = provider.company.company_name;
    let index = providers.indexOf(provider);

    // Delete the provider
    providers.splice(index, 1);

    res.status(200);
    res.send(provider);
};

// DELETE ALL
// url: /api/providers
module.exports.deleteAll = (req, res) => {
    // Delete all providers
    providers = [];

    res.status(200);
    res.send('All providers deleted!');
};