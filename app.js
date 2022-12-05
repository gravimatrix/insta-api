const express = require('Express');
const app = express();
const connection = require('./connect');
const users = require('./routes/users');
const register = require('./routes/register');
const login = require('./routes/login');
const editProfile = require('./routes/editProfile');

connection
.then(() => {
    //connection successful
    console.log("connected successfuly");
    app.get('/', (req, res, next) => {
        
    }); 

    app.use('/users', users);
    app.use('/register',register);
    app.use('/login',login);
    app.use('/editProfile', editProfile);    
})
.catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Listening to 3000");
}); 