# ChatbotBoilerPlate
¿Cómo crear un Chatbot con Oracle?

Pasos Chatbot 
1.	Crear el Chatbot
2.	Definir las intenciones a ser utilizadas
a.	Nombre
b.	Ejemplos
3.	Entreno las intenciones del Chatbot utilizando un modelo lingüístico o Machine Learning
4.	Crear un BackEnd
5.	Crear una nueva Api
6.	Para efectos de esta integración, no se requerirá login para el acceso a esta.
7.	Bajar el archivo de JavaScript scaffold
8.	Copiar del Boiler Plate (http://www.oracle.com/technetwork/topics/cloud/downloads/amce-downloads-4478270.html ) los siguientes archivos :
*La ruta de estos es amce-bots-samples-v18.2.3\api-implementation
a.	MessageModel
b.	Registry
c.	SDK
d.	Shell
9.	Crear .js con el nuevo Componente que hará el manejo de la lógica
Ej de estructura de archivos
Main Folder/js/components/”Carpeta para Componentes”/”El nuevo Componente.js”
10.	En el nuevo Componente modifico la metadata y creo la lógica de este, utilizando la estructura del SDK. En este ejemplo se hace la validación del atributo de nombre y respecto a este se retorna un valor
11.	Modificar el registry.js en la entrada de components de manera que la ruta corresponda con el componente y el nombre que se utilizó en la metada sea igual al del componente

  components: {
    'algo.xx: require('./components/ora/person')
  }
  
12.	Modificar el archivo con el “Nombre del API”.js, se recomienda guardar una ruta de los RestEndPoints del archivo.
a.	Reemplazar el contenido por archivo por el del boilerplate con nombre interaction_ora.js
b.	Cambiar la apiURL por la de su proyecto
13.	En el archivo package.json incluir las siguientes dependencias

  "dependencies": {
  "joi": "^9.2.0",
  "log4js": "^1.1.1"
}

14.	Compilar el proyecto con nodejs. Ejecutar desde la carpeta raíz el comando npm install
15.	Verificar la instalación de las dependencias de NodeJs en la carpeta node_modules.
16.	Comprimir el archivo anterior desde la carpeta raíz
17.	Subir este archivo en la pestaña de implementación
18.	Asocio la Nueva Api con el Back End
19.	Creo un nuevo Servicio en el Bot llenando el siguiente formulario:
a.	Backend ID: Esta información se encuentra en la configuración del BackEnd
b.	Metadata URL: Url donde está la Metadata del API
c.	Anonymous Key: Esta información se encuentra en la configuración del BackEnd, incluir al final de la url lo siguiente: “/components”
20.	Se modifica el flujo de tal manera que se utilice el Componente previamente creado
Ejemplo de flujo 
#metadata: information about the flow
#  platformVersion: the version of the bots platform that this flow was written to work with 
metadata:
  platformVersion: 1.0
main: true
name: OraBot
context:
  variables:
    greeting: "string"
    name: "string"
states:
  intent:
    component: "System.Intent"
    properties:
      variable: "iResult"
      confidenceThreshold: 0.4
    transitions:
      actions:
        Saludar: "askName"
        Despedirse: "saySomething"
  askName:
    component: "System.Text"
    properties:
     prompt: "What is your name?"
     variable: "name"
  saySomething:
    component: "debt.person"
    properties:
      name: "${name.value}"
    transitions:
      return: "done"
