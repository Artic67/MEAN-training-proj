// Main Controller

module.exports.home = (req, res) => {
    res.render('index', { title: 'Express' });
};