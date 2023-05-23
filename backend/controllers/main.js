// Main Controller

module.exports.home = (req, res) => {
    res.render('index', { title: 'The MEAN Stack Agency' });
};

module.exports.about = (req, res) => {
    res.render('about');
};

module.exports.contact = (req, res) => {
    res.render('contact');
};

module.exports.login = (req, res) => {
    res.render('login');
};

module.exports.register = (req, res) => {
    res.render('register');
};

module.exports.forgotpassword = (req, res) => {
    res.render('forgot-password');
};