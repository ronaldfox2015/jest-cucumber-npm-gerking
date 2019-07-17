const passport = require('passport')
const passportHttp = require('passport-http');

// The handler to trigger when we receive a token
function handler(userId, password, done) {
    if (userId === 'test' && password === 'P@ssw0rd') {
        done(null, {
            id: 1,
            name: 'Graham'
        });
    } else {
        done(null, false);
    }
}

passport.use(new passportHttp.BasicStrategy(handler));
