
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDocument = {
    servers: [
        {
            url: 'http://localhost:6543/api/v1',
            description: 'Local server'
        }
    ],
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
    }
}
  
  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDocument,
    // path to the API docs
    apis: ['./*.js'],
  };

  module.exports = swaggerJSDoc(options);
