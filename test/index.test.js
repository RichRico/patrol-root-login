var tape = require('tape');
var rule = require('../index.js');

tape('Detects root login correctly', function (t) {
	var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
	rule.fn(rootLoginEvent, function(err, message){
		t.equal(message.subject, 'Root user logged in to the console', 'Detected root user login');
		t.end();

	});
});

tape('Not Detects root login correctly', function (t) {
	var rootLoginEvent = require('./fixtures/notRootLoginEvent.json');
	rule.fn(rootLoginEvent, function(err, message){
		t.equal(message, 'Not root login');
		t.end();

	});
});