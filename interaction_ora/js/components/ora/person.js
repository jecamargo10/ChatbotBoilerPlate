"use strict";

module.exports = {
        metadata: () => (
        {
            "name": "debt.person",
            "properties": {
                "name": { "type": "string", "required": true }
             },
             "supportedActions": []
        }
    ),
    invoke: (conversation, done) => {
        const name = conversation.properties().name ? conversation.properties().name : '';
        conversation.oracleMobile.custom.ConnectorProcess.get('getTest',null, '').then(
			function(result){
          console.info("RESULT")
//console.info(result.result)
var sirve = JSON.parse(result.result)
console.info(sirve.name)

console.info("ALGO")
console.info(result)
var nombre = JSON.stringify(result.result.name)
        conversation.reply({ text: 'Bienvenido ' + sirve.name });
        conversation.transition();
        done();

			}

		)
      /**  if (name === "Emerson")
        {
          conversation.reply({ text: 'Hola ' + name  + ' Te recuerdo que tu recibo de Mátricula vence prontamente'});
        }
        else {
          conversation.reply({ text: 'Bienvenido ' + name });
        }*/

    }
};
