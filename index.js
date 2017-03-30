'use strict';

const Hapi = require('hapi');
const Vision = require('vision')
const Inert =  require('inert')
const HapiNamedRoutes =  require('hapi-named-routes')

const Base = require('./server/routes/base.js')
const Assets = require('./server/routes/assets.js')
const content = require('./content')

const Server = new Hapi.Server();

Server.connection({
  host: 'localhost',
  port: process.env.PORT || 8000
});


Server.register([
  Vision,
  Inert,
  HapiNamedRoutes,
  Assets,
  {
    register: Base,
    options: { content }
  }
], err => {
  if (err)
    throw err;

  Server.views({
    engines: { html: require('handlebars') },
    path: './server/views',
    layoutPath: './server/views/layouts',
    layout: 'default',
    partialsPath: './server/views/partials'
  });

  Server.start((err) => {
      if (err)
          throw err;

      console.log('Server running at:', Server.info.uri);
  });
});
