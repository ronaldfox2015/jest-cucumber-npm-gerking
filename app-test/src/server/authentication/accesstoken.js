const passport = require('passport')
const passportBearer = require('passport-http-bearer');

// The handler to trigger when we receive a token
function handler(userId, done) {
    if (userId === 'abc123') {
        done(null, {
            id: 1,
            name: 'Graham'
        });
    } else {
        done(null, false);
    }
}

passport.use(new passportBearer.Strategy(handler));
