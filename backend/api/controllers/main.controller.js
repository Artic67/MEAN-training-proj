let providers = require('../models/providers.models');

// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// POST
// url: /api/providers
module.exports.create = (req, res) => {
    const min = 100000;
    const max = 999999;
    let id = Math.floor(Math.random() * (max - min) + min);

    let provider = {
        id : id,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        position : req.body.position,
        company : {
            company_name : req.body.company.company_name,
            address : req.body.company.address,
            address2 : req.body.company.address2,
            city : req.body.company.city,
    
            state : req.body.company.state,
            postal_code : req.body.company.postal_code,
            phone : req.body.company.phone,
            email : req.body.company.email,
    
            description : req.body.company.description,
            tagline : req.body.company.tagline,
        }
    };

    // Add new provider to the list
    providers.push(provider);
    res.status(200);
    res.send(provider);
};

// GET
// url: /api/providers
module.exports.readAll = (req, res) => {
    res.status(200);
    res.send(providers);
};

// GET ONE
// url: /api/providers/123
module.exports.readOne = (req, res) => {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    res.status(200);
    res.send(provider);
};

// PUT
// url: /api/providers/123
module.exports.update = (req, res) => {
    let id = req.params.id;
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