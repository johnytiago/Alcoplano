exports.register = function(server, options, next){
  server.route([
    {
      method: 'GET',
      path: '/partials/{path*}',
      config: {
        handler: {
          directory: { path: './server/views/partials' }
        },
        id: 'partials'
      }
    },
    {
      method: 'GET',
      path: '/images/{path*}',
      config: {
        handler: {
          directory: { path: './public/images' }
        },
        id: 'images'
      }
    },
    {
      method: 'GET',
      path: '/css/{path*}',
      config: {
        handler: {
          directory: { path: './public/css' }
        },
        id: 'css'
      }
    },
    {
      method: 'GET',
      path: '/js/{path*}',
      config: {
        handler: {
          directory: { path: './public/js' }
        },
        id: 'js'
      }
    }
  ]);

    next();
}

exports.register.attributes = {
    name: 'assets'
};
