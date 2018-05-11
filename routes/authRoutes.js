const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/auth/google',
		passport.authenticate(	
			'google', //GoogleStrategy is aka 'google' internally in passport.js
			{ scope : ['profile', 'email'] } // can also ask for contacts, emails etc 
		)
	);

	app.get(
		'/auth/google/callback', //already has code in callback url
		passport.authenticate(
			'google' 
		)
	);
};