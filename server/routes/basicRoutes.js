/**
 * Created by Alex on 1/13/2016.
 */
var routes = require('../routes'),
    customerApi = require('../routes/api/customer');
    gameApi = require('../routes/api/game');


module.exports = function(app, passport) {

    app.get('/api/dataservice/Customers', customerApi.customers);
    app.get('/api/dataservice/Customer/:id', customerApi.customer);
    app.post('/api/dataservice/PostCustomer', customerApi.addCustomer);
    app.put('/api/dataservice/PutCustomer/:id', customerApi.editCustomer);
    app.delete('/api/dataservice/DeleteCustomer/:id', customerApi.deleteCustomer);

    app.get('/api/dataservice/States', customerApi.states);

    app.get('/api/dataservice/CustomersSummary', customerApi.customersSummary);
    app.get('/api/dataservice/CustomerById/:id', customerApi.customer);
    app.get('/api/dataservice/CheckUnique/:email', customerApi.checkemail);


    app.get('/api/dataservice/Games', gameApi.games);
    app.get('/api/dataservice/Game/:id', gameApi.game);
    app.delete('/api/dataservice/deleteGame/:id', gameApi.deleteGame);
    app.put('/api/dataservice/PutGame/:id', gameApi.editGame);
    app.post('/api/dataservice/PostGame', gameApi.insertGame);
    app.get('/api/dataservice/GamesByGenre/:id', gameApi.byGenre);

    // =====================================
    // LOGIN ===============================
    // =====================================
    // process the login form
    app.post('/api/login', passport.authenticate('local-login', {
        successRedirect: '/customers', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // process the signup form
    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect : '/customers', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/api/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/api/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/', routes.index);

    // redirect all others to the index (HTML5 history)
    app.get('*', routes.index);
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
