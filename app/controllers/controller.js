// add all functions you want for specific routes

exports.test = (req, res) => {
	res.send('success');
}

exports.login = (req, res) => {
	if(req.body.username == 'testUsername' && req.body.password == 'testPassword'){
		return res.json({err: null, status: true});
	}
	else {
		return res.json({err: 'invalid username or password', status: false});
	}
}

exports.changePassword = (req, res) => {
	let userDetails = req.body;
	if(!userDetails.username && !userDetails.oldPassword && !userDetails.newPassword) {
		return res.json({err: 'username, oldPassword or newPass not provided', status: false});
	}
	if(userDetails.oldPassword != 'testPassword') {
		return res.json({err: 'invalid old password', status: false});
	}
	return res.json({err: null, status:true});
}

exports.signup = (req, res) => {
	let userDetails = req.body;
	if(userDetails.username && userDetails.password && userDetails.email) {
		return res.json({err: null, status: true});
	}
	return res.json({err: 'incomplete details', status: false});
}

exports.updateUser = (req, res) => {
	let userDetails = req.body;
	if(typeof userDetails != 'object') return res.send({err: 'invalid user details'});
	if(!userDetails.username && !userDetails.password && !userDetails.email) {
		return res.json({err: 'nothing to update', status: false});
	}
	return res.json({err: null, status: true});
}

exports.getUser = (req, res) => {
	let username = req.query.username;
	console.log(username);
	if(username) {
		return res.json({err: null, user: {
			username: 'testUser',
			email: 'test@test.com'
		}, status: true});
	}
	return res.json({err: 'invalid user', status: false})
}

exports.getUsers = (req, res) => {
	return res.json({users: [
		{
			username: 'testUser1',
			email: 'test1@test.com'
		},
		{
			username: 'testUser2',
			email: 'test2@test.com'
		},
		{
			username: 'testUser3',
			email: 'test3@test.com'
		},
	]});
}

exports.about = (req, res) => {
	return res.send('lorem ipsum doler amet about the server');
}