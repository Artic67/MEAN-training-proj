const providers = require('../models/providers');


// List
module.exports.list = (req, res) => {
    res.render('providers/providers-list',
        {
            title: 'Service Providers',
            providers: providers
        });
};

// Details
module.exports.details = (req, res) => {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    res.render('providers/providers-details',
        {
            id: id,
            title: 'Service Providers Details',
            company: provider.company
        });
};

// Edit Provider
module.exports.edit = (req, res) => {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    res.render('providers/providers-edit',
        {
            id: id,
            title: 'Edit',
            provider: provider
        });
};

// Update Provider
module.exports.update = (req, res) => {
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id);
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;

    provider.company.company_name = req.body.company_name;
    provider.company.address = req.body.address;
    provider.company.address2 = req.body.address2;
    provider.company.city = req.body.city;

    provider.company.state = req.body.state;
    provider.company.postal_code = req.body.postal_code;
    provider.company.phone = req.body.phone;
    provider.company.email = req.body.email;

    provider.company.description = req.body.description;
    provider.company.tagline = req.body.tagline;

    res.render('providers/providers-update',
        {
            title: 'Update'
        });
};

// Add Form GET
module.exports.addform = (req, res) => {
    res.render('providers/providers-add-form',
        {
            title: 'Add Provider',
        });
};

// Add Provider POST
module.exports.add = (req, res) => {
    const min = 100000;
    const max = 999999;
    let id = Math.floor(Math.random() * (max - min) + min);

    let provider = {
        id : id,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        position : req.body.position,
        company : {
            company_name : req.body.company_name,
            address : req.body.address,
            address2 : req.body.address2,
            city : req.body.city,
    
            state : req.body.state,
            postal_code : req.body.postal_code,
            phone : req.body.phone,
            email : req.body.email,
    
            description : req.body.description,
            tagline : req.body.tagline,
        }
    };

    // Add new provider to the list
    providers.push(provider);
    res.render('providers/providers-add',
        {
            title: 'Added'
        });
};