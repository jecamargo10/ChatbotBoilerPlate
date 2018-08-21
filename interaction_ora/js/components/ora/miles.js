"use strict";

module.exports = {
        metadata: () => (
        {
            "name": "miles.person",
            "properties": {
                "name": { "type": "string", "required": true }
             },
             "supportedActions": []
        }
    ),
    invoke: (conversation, done) => {
        const name = conversation.properties().name ? conversation.properties().name : '';
        conversation.oracleMobile.custom.ConnectorProcess.get('getPuntos',null, {qs:{id:name} }).then(
			function(result){
          console.info("RESULT")
console.info(result.result)

        conversation.reply({ text: 'Bienvenido ' + result.result });
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
