const _ = require('lodash')

exports.register = function(server, options, next) {

  function handle(viewName) {
    return (request, reply) => {
      let lang = request.query.lang
      lang = (lang && options.content[lang])?  lang : 'pt'

      opts = options.content[lang]
      opts.current = request.path
      opts.header.active = (page) => { return (viewName === page)?'active': ''; }
      opts.header.servicePrefix = (opts.current === '/') ? "" : "/" ;

      console.log(opts)
      reply.view(viewName, opts );
    }
  }

  server.route([
    { 
      method: 'GET',
      path: '/',
      config: {
        handler: handle('index'),
        id: 'index'
      }
    },
    { 
      method: 'GET',
      path: '/about',
      config: {
        handler: handle('about'),
        id: 'about'
      }
    },
    { 
      method: 'GET',
      path: '/contact',
      config: {
        handler: handle('contact'),
        id: 'contact'
      }
    },
    { 
      method: 'GET',
      path: '/portfolio',
      config: {
        handler: handle('portfolio'),
        id: 'portfolio'
      }
    },
    { 
      method: 'GET',
      path: '/portfolio-item',
      config: {
        handler: handle('portfolio-item'),
        id: 'portfolio-item'
      }
    },
    {
      method: 'GET',
      path: '/{path*}',
      config: {
        handler: function(request, reply){
          reply.view('404', options.content.pt).code(404);
        },
        id: '404'
      }
    }
  ])

  next();
}

exports.register.attributes = {
      name: 'base'
};
