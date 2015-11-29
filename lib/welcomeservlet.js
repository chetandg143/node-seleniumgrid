/*
Copyright TestingBot

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var models = require('./models');

exports.handleRequest = function(request, cb) {
	cb(null, new models.Response(200, "Welcome to our Selenium Grid. Point your tests to this hub.", {'Content-Type': 'text/plain'}));
};

exports.robots = function(request, cb) {
	cb(null, new models.Response(200, "User-agent: *\nDisallow: /", {'Content-Type': 'text/plain'}));
};

exports.status = function(request, cb) {
	cb(null, new models.Response(200, JSON.stringify({
		"status" : 0,
		"sessionId" : null,
		"value" : {
			"build" : {
				"version" : "node-seleniumgrid"
			},
			"details" : {
				"status" : "available",
				"details" : "node-seleniumgrid is fully operational"
			}
		}
	})));
};