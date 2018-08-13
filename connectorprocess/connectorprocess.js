/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.get('/mobile/custom/ConnectorProcess/components', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [
					  {
					    "name": "say_hello",
					    "properties": {
					      "name": { "type": "string", "required": true }
					    },
					    "supportedActions": [
					    ]
					  }
					];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/ConnectorProcess/getTest', function(req,res) {
		req.oracleMobile.connectors.GetPerson.get('',null, {}).then(
			function(result){
				var statusCode = 200;
				res.status(statusCode).send(result.result);
			}

		)
	});




	service.post('/mobile/custom/ConnectorProcess/components/:componentName', function(req,res) {
		var result = {};
		var statusCode = 201;
		res.status(statusCode).send(result);
	});

};
